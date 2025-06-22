const fs = require('fs');
const readline = require('readline');
const path = require('path');
const Records = require('./records.model');


const upload = async (req, res) => {
    const { file } = req;

    // Verifica que el archivo existe
    if (!file) {
        return res.status(400).json({ error: 'No se subió ningún archivo.' });
    }

    const filePath = path.join(__dirname, '..', '_temp', file.filename);

    const rl = readline.createInterface({
        input: fs.createReadStream(filePath),
        crlfDelay: Infinity,
    });

    const BATCH_SIZE = 1000; // Insertar de a mil para mejor rendimiento
    let batch = [];
    let lineCount = 0;

    for await (const line of rl) {
        if (lineCount === 0) {
            lineCount++;
            continue; // Saltear encabezado
        }

        const [id, firstname, lastname, email, email2, profession] = line.split(',');

        batch.push({ id, firstname, lastname, email, email2, profession });

        if (batch.length === BATCH_SIZE) {
            await Records.insertMany(batch);
            batch = [];
        }

        lineCount++;
    }

    if (batch.length > 0) {
        await Records.insertMany(batch);
    }

    // Borra el archivo temporal después de procesarlo
    fs.unlinkSync(filePath);

    // Devuelve respuesta
    return res.status(200).json({
        message: `Archivo procesado. Líneas: ${lineCount - 1}`,
    });
};

const list = async (_, res) => {
    try {
        const data = await Records
            .find({})
            .limit(1000)
            .lean();

        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports = {
    upload,
    list,
};
