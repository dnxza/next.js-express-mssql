const configServer = require('../config').configServer;
const dblog = configServer.console.express;

var express = require('express')
var router = express.Router()

const sql = require("msnodesqlv8");
const connectionString = configServer.mssql.connectionString;

// เริ่มที่ /api/...

router.get('/test', function (req, res) {
    // const query = `SELECT * FROM dbo.ddl_city`;
    // sql.query(connectionString, query, (err, rows) => {
    //     if (!err) {
    //         res.json({ result: rows });
    //     } else {
    //         if (dblog) console.error(err);
    //         res.status(500).send('Something broke!')
    //     }
    // });
    res.json({ "result": [{ "ID": 1, "CityName": "กรุงเทพมหานคร" }, { "ID": 2, "CityName": "กำแพงเพชร " }, { "ID": 3, "CityName": "ชัยนาท " }, { "ID": 4, "CityName": "นครนายก " }, { "ID": 5, "CityName": "นครปฐม " }, { "ID": 6, "CityName": "นครสวรรค์ " }, { "ID": 7, "CityName": "นนทบุรี " }, { "ID": 8, "CityName": "ปทุมธานี " }, { "ID": 9, "CityName": "พระนครศรีอยุธยา " }, { "ID": 10, "CityName": "พิจิตร " }, { "ID": 11, "CityName": "พิษณุโลก " }, { "ID": 12, "CityName": "เพชรบูรณ์ " }, { "ID": 13, "CityName": "ลพบุรี " }, { "ID": 14, "CityName": "สมุทรปราการ " }, { "ID": 15, "CityName": "สมุทรสงคราม " }, { "ID": 16, "CityName": "สมุทรสาคร " }, { "ID": 17, "CityName": "สิงห์บุรี " }, { "ID": 18, "CityName": "สุโขทัย " }, { "ID": 19, "CityName": "สุพรรณบุรี " }, { "ID": 20, "CityName": "สระบุรี " }, { "ID": 21, "CityName": "อ่างทอง " }, { "ID": 22, "CityName": "อุทัยธานี " }, { "ID": 23, "CityName": "จันทบุรี " }, { "ID": 24, "CityName": "ฉะเชิงเทรา " }, { "ID": 25, "CityName": "ชลบุรี " }, { "ID": 26, "CityName": "ตราด " }, { "ID": 27, "CityName": "ปราจีนบุรี " }, { "ID": 28, "CityName": "ระยอง " }, { "ID": 29, "CityName": "สระแก้ว " }, { "ID": 30, "CityName": "กาฬสินธุ์ " }, { "ID": 31, "CityName": "ขอนแก่น " }, { "ID": 32, "CityName": "ชัยภูมิ " }, { "ID": 33, "CityName": "นครพนม " }, { "ID": 34, "CityName": "นครราชสีมา " }, { "ID": 35, "CityName": "บึงกาฬ " }, { "ID": 36, "CityName": "บุรีรัมย์ " }, { "ID": 37, "CityName": "มหาสารคาม " }, { "ID": 38, "CityName": "มุกดาหาร " }, { "ID": 39, "CityName": "ยโสธร " }, { "ID": 40, "CityName": "ร้อยเอ็ด " }, { "ID": 41, "CityName": "เลย" }, { "ID": 42, "CityName": "สกลนคร " }, { "ID": 43, "CityName": "สุรินทร์ " }, { "ID": 44, "CityName": "ศรีสะเกษ " }, { "ID": 45, "CityName": "หนองคาย " }, { "ID": 46, "CityName": "หนองบัวลำภู " }, { "ID": 47, "CityName": "อุดรธานี " }, { "ID": 48, "CityName": "อุบลราชธานี " }, { "ID": 49, "CityName": "อำนาจเจริญ " }, { "ID": 50, "CityName": "กาญจนบุรี " }, { "ID": 51, "CityName": "ตาก " }, { "ID": 52, "CityName": "ประจวบคีรีขันธ์ " }, { "ID": 53, "CityName": "เพชรบุรี " }, { "ID": 54, "CityName": "ราชบุรี " }, { "ID": 55, "CityName": "เชียงราย " }, { "ID": 56, "CityName": "เชียงใหม่" }, { "ID": 57, "CityName": "น่าน " }, { "ID": 58, "CityName": "พะเยา " }, { "ID": 59, "CityName": "แพร่ " }, { "ID": 60, "CityName": "แม่ฮ่องสอน " }, { "ID": 61, "CityName": "ลำปาง " }, { "ID": 62, "CityName": "ลำพูน " }, { "ID": 63, "CityName": "อุตรดิตถ์ " }, { "ID": 64, "CityName": "กระบี่ " }, { "ID": 65, "CityName": "ชุมพร " }, { "ID": 66, "CityName": "ตรัง " }, { "ID": 67, "CityName": "นครศรีธรรมราช " }, { "ID": 68, "CityName": "นราธิวาส " }, { "ID": 69, "CityName": "ปัตตานี " }, { "ID": 70, "CityName": "พังงา " }, { "ID": 71, "CityName": "พัทลุง " }, { "ID": 72, "CityName": "ภูเก็ต " }, { "ID": 73, "CityName": "ระนอง " }, { "ID": 74, "CityName": "สตูล " }, { "ID": 75, "CityName": "สงขลา " }, { "ID": 76, "CityName": "สุราษฎร์ธานี " }, { "ID": 77, "CityName": "ยะลา " }] });
});

module.exports = router