const sql = require("../db/db.js");

// constructor
const Documental = function (documental) {
    //this.campo = torta.campo;
};

Documental.create = (newDoc, result) => {
    sql.query("INSERT INTO documental SET ?", newDoc, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        console.log("Documental creado: ", { id: res.insertId, ...newTorta });
        result(null, { id: res.insertId, ...newDoc });
    });
};

Documental.findById = (id, result) => {
    sql.query(`SELECT * FROM documental WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Documental encontrado: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
    });
};

Documental.getAll = (result) => {
    let query = "SELECT * FROM documental";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }

        console.log("Documentales: ", res);
        result(null, res);
    });
};

Documental.updateById = (id, torta, result) => {
    sql.query(
        // Cambiar los nombres
        "UPDATE tortas SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?",
        [torta.nombre, torta.descripcion, torta.precio, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("Documental actualizado: ", { id: id, ...torta });
            result(null, { id: id, ...torta });
        }
    );
};

Documental.remove = (id, result) => {
    sql.query("DELETE FROM documental WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Tutorial with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("Documental borrado id: ", id);
        result(null, res);
    });
};

Documental.removeAll = result => {
    sql.query("DELETE FROM documental", (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }

        console.log(`Se borraron ${res.affectedRows} documentales`);
        result(null, res);
    });
};

module.exports = Documental;