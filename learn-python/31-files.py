print('files')
print('****************************************************************************************************')

import os
output_file = 'combined.py'
with open(output_file, 'w', encoding='utf-8') as outfile:
    for filename in sorted(os.listdir(".")):
        if os.path.isfile(filename) and filename != output_file:
            with open(filename, 'r', encoding='utf-8') as infile:
                outfile.write(infile.read())

print("Done.")
