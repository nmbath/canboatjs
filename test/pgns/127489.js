//fixme: add "Total Engine hours" when implemented

module.exports = [{
  "expected": {"timestamp":"2016-04-09T16:41:38.175Z","prio":2,"src":16,"dst":255,"pgn":127489,"description":"Engine Parameters, Dynamic","fields":{"Instance":"Single Engine or Dual Engine Port","Oil pressure":158300,"Temperature":296.67,"Alternator Potential":13.82,"Discrete Status 1":["Over Temperature","Low Oil Pressure"],"Discrete Status 2": []}},
  "input": "2016-04-09T16:41:38.175Z,2,127489,16,255,26,00,2f,06,ff,ff,e3,73,66,05,ff,7f,ff,ff,ff,ff,ff,ff,ff,ff,ff,06,00,00,00,7f,7f"
},
{
  "expected": {"timestamp":"2017-04-15T14:57:58.469Z","prio":2,"src":17,"dst":255,"pgn":127489,"description":"Engine Parameters, Dynamic","fields":{"Instance":"Single Engine or Dual Engine Port","Oil pressure":393000,"Temperature":330.43,"Discrete Status 1": [],"Discrete Status 2": []}},
  "input": "2017-04-15T14:57:58.469Z,2,127489,17,255,26,00,5a,0f,ff,ff,13,81,ff,7f,ff,7f,ff,ff,ff,ff,ff,ff,ff,ff,ff,00,00,00,00,7f,7f"
}
]
