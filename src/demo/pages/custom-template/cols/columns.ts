import {ColumnIfc, TableColumns, TableColumn} from "NG2TableView";


export const PageTableColumns:Array<ColumnIfc> = new TableColumns()
    .addCol(new TableColumn()
        .setTitle("index")
        .setName("index")
    )
    .addCol(new TableColumn()
        .setTitle("Editable name ")
        .setName("name")
        .setTemplate(require("./custom-template.html"))
    )
    .addCol(new TableColumn()
        .setTitle("gender")
        .setName("gender")
    )
    .addCol(new TableColumn()
        .setTitle("company")
        .setName("company")
    )
    .addCol(new TableColumn()
        .setTitle("email")
        .setName("email")
    )
    .addCol(new TableColumn()
        .setTitle("latitude")
        .setName("location.latitude")
    )
    .addCol(new TableColumn()
        .setTitle("longitude")
        .setName("location.longitude")
    )
    .getCols();
