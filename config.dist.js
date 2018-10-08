// port ที่ใช้เชื่อมต่อ
// console แสดง log ใน console

exports.configServer = {
    port: 3000,
    console: {
        express: true,
        database: true
    },
    mssql: {
        connectionString: "Driver={SQL Server Native Client 11.0};Server=localhost;Database=SQL_Test;Uid=dx;Pwd=654321;"
    }
}