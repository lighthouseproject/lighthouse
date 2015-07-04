#!/bin/bash
APIKEY=$(cat "apikey.txt") 

curl -g http://api.digitalnz.org/records.json\?api_key\=$APIKEY\&and\[primary_collection\]\=New+Zealand+Gazette\&per_page\=10\&text\="appointments/reappointments"\&fields\=title,description,fulltext,subject,date,id\&sort\=date\&direction\=desc | python -m json.tool > gazette.json && cat gazette.json | grep result_count
