#!/bin/bash
APIKEY=$(cat "apikey.txt") 

curl -g http://api.digitalnz.org/records.json\?api_key\=$APIKEY\&and\[primary_collection\]\=New+Zealand+Gazette\&per_page\=100\&text\="appointments/reappointments"\&fields\=title,description,date,id\&sort\=date\&direction\=desc | python -m json.tool > gazette.json && cat gazette.json | grep result_count
