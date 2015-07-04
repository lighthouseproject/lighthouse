
def process(record):
  parts = record['fulltext'].split("\n");
  print "name: ", parts[1]
  print "Appointment: ", parts[2]
  print
  print


file = open('gazette.json')

import json
data = json.loads(file.read())['search']['results']
file.close()


for r in data:
  #print r['title']
  #print r['fulltext']
  process(r)

