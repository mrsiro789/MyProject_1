const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello K29</h1>' + 
			'<h2> Mon hoc: IOT </h2>' +
			'<table style="border:1px solid black;">' +
			  '<tr>' +
				'<th style="border:1px solid black;width:100px">MSHV</th>' +
				'<th style="border:1px solid black;width:200px">Ho ten</th>' +
				'<th style="border:1px solid black;width:200px">Dia chi</th>' +
				'<th style="border:1px solid black;">Photo</th>' +
			  '</tr>' +
			  '<tr>' +
				'<td style="border:1px solid black;width:100px">M2522004</td>' +
				'<td style="border:1px solid black;width:200px">Le Minh Hai</td>' +
				'<td style="border:1px solid black;width:200px">Bac lieu</td>' +
				'<td style="border:1px solid black;"><img style="width:100px;height:100px" src="https://www.dropbox.com/s/prbirq54m6tf9hs/hai.jpg?raw=1" alt="Le Minh Hai"></td>' +
			  '</tr>' +
			  '<tr>' +
				'<td style="border:1px solid black;width:100px">M2522004</td>' +
				'<td style="border:1px solid black;width:200px">Vo Nhu Phuong</td>' +
				'<td style="border:1px solid black;width:200px">Kien Giang</td>' +
				'<td style="border:1px solid black;"><img style="width:100px;height:100px" src="https://www.dropbox.com/s/bbdrad83v5odm86/phuong.jpg?raw=1" alt="Vo Nhu Phuong"></td>' +
			  '</tr>' +
			  '<tr>' +
				'<td style="border:1px solid black;width:100px">M2522004</td>' +
				'<td style="border:1px solid black;width:200px">Le Ngoc Dao</td>' +
				'<td style="border:1px solid black;width:200px">Ca Mau</td>' +
				'<td style="border:1px solid black;"><img style="width:100px;height:100px" src="https://www.dropbox.com/s/ukjksyafndhptx2/dao.jpg?raw=1" alt="Le Ngoc Dao"></td>' +
			  '</tr>' +
			  '<tr>' +
				'<td style="border:1px solid black;width:100px">M2522004</td>' +
				'<td style="border:1px solid black;width:200px">Vo Thi Hong Doan</td>' +
				'<td style="border:1px solid black;width:200px">Hau Giang</td>' +
				'<td style="border:1px solid black;"><img style="width:100px;height:100px" src="https://www.dropbox.com/s/uvmbol4ptgw40eq/doan.jpg?raw=1" alt="Vo Thi Hong Doan"></td>' +
			  '</tr>' +
			'</table>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
