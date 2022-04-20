from statistics import mean
import os

diagram_path = r"images\diagram"

values = {
    "gaze": [],
    "eyelid": [],
    "diagram": []
}

# Gaze direction
gaze_values = {
    "Sven": [23,171,102],
    "Per": [23,240,69],
    "Joel": [1,422,42]
}

for key in gaze_values:
    values["gaze"].append(round(mean(gaze_values[key]))) 

# Eyelid
eyelid_values = {
    "Sven": [36,6,93],
    "Per": [50,78,49],
    "Joel": [52,61,9]
}

for key in eyelid_values:
    values["eyelid"].append(round(mean(eyelid_values[key]))) 
    
for path, _, files in os.walk(diagram_path):
    for file in files:
        image_path = os.path.join(diagram_path, file)
        values["diagram"].append(image_path)

exec(open("data_management\pytest.py").read())