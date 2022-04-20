import json, calc

data = {
    'students': [ # Deklaration av JSON objekt för varje person
        {
            'name': 'Sven Svensson',
            'avgGazeDirection': calc.values["gaze"][0],
            'avgEyelid': calc.values["eyelid"][0],
            'timeGraph': calc.values["diagram"][0]
        }, 
        {
            'name': 'Per Persson',
            'avgGazeDirection': calc.values["gaze"][1],
            'avgEyelid': calc.values["eyelid"][1],
            'timeGraph': calc.values["diagram"][1]
        },
        {
            'name': 'Joel Joelsson',
            'avgGazeDirection': calc.values["gaze"][2],
            'avgEyelid': calc.values["eyelid"][2],
            'timeGraph': calc.values["diagram"][2]
        }
    ]
}

with open('data.json', 'w', encoding = 'utf-8') as f: # Öppnar JSON filen
    json.dump(data, f, ensure_ascii = False, indent = 4) # Laddar över datan från objekten till JSON filen