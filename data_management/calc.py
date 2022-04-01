from statistics import mean

gaze = []
eyelid = []

# Gaze direction
gaze_values = {
    "Sven": [13,151,142],
    "Per": [27,200,68],
    "Joel": [6,242,40]
}

for key in gaze_values:
    gaze.append(round(mean(gaze_values[key]))) 

# Eyelid
eyelid_values = {
    "Sven": [36,6,93],
    "Per": [50,78,49],
    "Joel": [52,61,9]
}
for key in eyelid_values:
    eyelid.append(round(mean(eyelid_values[key]))) 

exec(open("data_management\pytest.py").read())