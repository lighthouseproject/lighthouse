

appointments = []

def process(record):
  parts = record['fulltext'].split("\n");

  appointments.append(
    {
      'raw': r,
      'name': parts[1],
      'appointment': parts[2]
    }
    )


file = open('gazette.json')

import json
data = json.loads(file.read())['search']['results']
file.close()


for r in data:
  #print r['title']
  #print r['fulltext']
  process(r)

print appointments

