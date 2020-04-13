const olympics = [
  {year: 1896, city: "アテネ"},
  {year: 1900, city: "パリ"},
  {year: 1904, city: "セントルイス", note: "アメリカ初開催"},
  {year: 1908, city: "ロンドン"},
  {year: 1912, city: "ストックホルム"},
  {year: 1916, city: "ベルリン", note: "第一次世界大戦で中止"},
  {year: 1920, city: "アントワープ"},
  {year: 1924, city: "パリ", note: "同じ都市での2回目の開催は初"},
  {year: 1928, city: "アムステルダム"},
  {year: 1932, city: "ロサンゼルス"}
]

// olympics.each do |olympic|
//   puts "---------------------"
//   puts "#{olympic[:year]}年#{olympic[:city]}大会"
// end

  for(let i=0; i < olympics.length; i++){
      console.log("---------------------");
      console.log(`${olympics[i].year}年${olympics[i].city}大会`);
      if(olympics[i].note){
          console.log(`${olympics[i].note}`);
      }
  }
