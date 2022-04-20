from statistics import mean
import os

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
    
for i in range(3):
    path = os.path.join("../images", f"graph{i}")
    print(os.path.isfile(path))

# exec(open("data_management\pytest.py").read())