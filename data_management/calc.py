from statistics import mean
import os

diagram_path = r"..\\public\\images" # Adress till mapp med diagram

values = { # Deklaration av tomma fält
    "gaze": [],
    "eyelid": [],
    "diagram": []
}

# Blickriktning
gaze_values = { # Deklaration av  test värden för blickriktning
    "Sven": [23,171,102],
    "Per": [23,240,69],
    "Joel": [1,422,42]
}

for key in gaze_values: # Tar snitt av värdena för blickriktning och avrundar det
    values["gaze"].append(round(mean(gaze_values[key]))) 

# Ögonlock
eyelid_values = { # Deklaration av test värden för ögonlocken
    "Sven": [36,6,93],
    "Per": [50,78,49],
    "Joel": [52,61,9]
}

for key in eyelid_values: # Tar snitt av värdena för ögonlocken och avrundar det
    values["eyelid"].append(round(mean(eyelid_values[key]))) 
    
for path, _, files in os.walk(diagram_path): # Laddar filer och sätter in rätt värden
    for file in files:
        image_path = os.path.join(diagram_path, file)
        values["diagram"].append(image_path)

exec(open("data_management\pytest.py").read())