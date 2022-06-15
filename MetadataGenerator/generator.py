import pandas as pd
import os
import json

folder_path = r'C:\Users\91993\Desktop\Blockchain\PsyMonsRenders\Psymon New Renders'

output_path = r'C:\Users\91993\Desktop\Blockchain\PsyMonsRenders\Psymon New Renders\Metadata'

delimiter = 5

i = 0

for subdir, dirs, files in os.walk(folder_path):
    for file in files:
        if i > delimiter:
            break
        i += 1
        if file.split('.')[-1] == 'json':
            file_path = os.path.join(subdir, file)
            print ("Converting : " + file_path)

            f = open (file_path)
            data = json.load(f)

            attributes = [{'trait_type': k, 'value': v} for k, v in data["NFT_Variants"].items()]


            row = {
                "name" : data["name"],
                "description" : "PsyMons Gen 0 NFT Collection",
                "attributes" : attributes
            }

            print (row)
            path = output_path +'\\'+ subdir.split('\\')[-3] + '\\' + subdir.split('\\')[-2] 
            os.makedirs(path, exist_ok=True)
            with open(path + '\\' + file, 'w') as json_file:
                json.dump(row, json_file, indent=4)

            f.close()

