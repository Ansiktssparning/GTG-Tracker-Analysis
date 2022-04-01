import json, calc

data = {
    'students': [
        {
            'name': 'Sven Svensson',
            'avgGazeDirection': calc.gaze[0],
            'avgEyelid': calc.eyelid[0],
            'timeGraph': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAooAAAGyCAMAAABUaxXjAAAAvVBMVEXKysrJycnIyMjGxsbNzc3Ozs7R0dHT09PU1NTW1tbc29ve39/i4uLj4+Pp6ent7e3x8vL29fX6+fn9/f3/////5eb/0dHmzc7rurr/qKntnJz/jY'
        }, 
        {
            'name': 'Per Persson',
            'avgGazeDirection': calc.gaze[1],
            'avgEyelid': calc.eyelid[1],
            'timeGraph': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkcAAAGdCAMAAAAv0CcRAAAAwFBMVEUAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAACAgIAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFhYcHBwQEBArKyszMzNKSk'
        },
        {
            'name': 'Joel Joelsson',
            'avgGazeDirection': calc.gaze[2],
            'avgEyelid': calc.eyelid[2],
            'timeGraph': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBBAEEAAD/2wBDAAcFBQYFBAcGBQYIBwcIChELCgkJChUPEAwRGBUaGRgVGBcbHichGx0lHRcYIi4iJSgpKywrGiAvMy8qMicqKyr/wAALCAEyAcUBAREA/8QAHAABAAMAAwEBAAAAAA'
        }
    ]
}

with open('data.json', 'w', encoding = 'utf-8') as f:
    json.dump(data, f, ensure_ascii = False, indent = 4)