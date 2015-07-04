export function initialize( container /*, application*/ ) {
  // let store = container.lookup('store:main');
  // store.pushMany('appointment', gazette['search']['results']);
}

export default {
  name: 'read-gazette',
  initialize: initialize,
  after: ['store'],
};

var gazette = {
    "search": {
        "facets": {},
        "page": 1,
        "per_page": 10,
        "request_url": "http://api.digitalnz.org/records.json?api_key=D8AaTuJujhPDLh3erWzL&and[primary_collection]=New+Zealand+Gazette&per_page=10&text=appointments/reappointments&fields=title,description,fulltext,subject,date,id&sort=date&direction=desc",
        "result_count": 1833,
        "results": [
            {
                "date": [
                    "2015-06-25 12:00:00 UTC"
                ],
                "description": "Pursuant to section 28 of the Crown Entities Act 2004, I reappoint\nRoger Heydon Bell\nDr Alison Claire O\u2019Connell\nas commissioners from 1 July 2015 up to 30 June 2018.\nDated at Wellington this 8th day of June 2015.\nHon GERRY BROWNLEE, Minister Responsible for the Earthquake Commission.",
                "fulltext": "Pursuant to section 28 of the Crown Entities Act 2004, I reappoint\nRoger Heydon Bell\nDr Alison Claire O\u2019Connell\nas commissioners from 1 July 2015 up to 30 June 2018.\nDated at Wellington this 8th day of June 2015.\nHon GERRY BROWNLEE, Minister Responsible for the Earthquake Commission.",
                "id": 36048687,
                "subject": [
                    "Departmental",
                    "Crown Entities Act",
                    "Appointments/reappointments",
                    "The Treasury"
                ],
                "title": "Reappointments to the Earthquake Commission"
            },
            {
                "date": [
                    "2015-06-25 12:00:00 UTC"
                ],
                "description": "Pursuant to section 28 of the Crown Entities Act 2004, I appoint\nAinsley Vivienne McLaren\nas a member from 1 July 2015 up to 30 June 2018; and I reappoint\nDr Craig Frederick Ansley\nas a member from 1 July 2015 up to 30 June 2018; and I reappoint\nShelley Jane Cave\nas a member from 1 July 2015 up to 30 June 2017; and I reappoint\nMichelle Elisa van Gaalen\nas a member from 1 November 2015 up to 31 October 2018.\nAll of the above are to the Government Superannuation Fund Author...",
                "fulltext": "Pursuant to section 28 of the Crown Entities Act 2004, I appoint\nAinsley Vivienne McLaren\nas a member from 1 July 2015 up to 30 June 2018; and I reappoint\nDr Craig Frederick Ansley\nas a member from 1 July 2015 up to 30 June 2018; and I reappoint\nShelley Jane Cave\nas a member from 1 July 2015 up to 30 June 2017; and I reappoint\nMichelle Elisa van Gaalen\nas a member from 1 November 2015 up to 31 October 2018.\nAll of the above are to the Government Superannuation Fund Authority.\nDated at Wellington this 8th day of June 2015.\nHon BILL ENGLISH, Minister of Finance.",
                "id": 36048697,
                "subject": [
                    "Departmental",
                    "Crown Entities Act",
                    "Appointments/reappointments",
                    "The Treasury"
                ],
                "title": "Appointment / reappointments to the Government Superannuation Fund Authority"
            },
            {
                "date": [
                    "2015-06-25 12:00:00 UTC"
                ],
                "description": "Pursuant to section 159D of the Education Act 1989, and section 28 of the Crown Entities Act 2004, I appoint to the Tertiary Education Commission\nJohn Spencer\nas chair for a term of two years commencing on 1 August 2015 and expiring on 31 July 2017; and\nJohn Morris\nas a member for a term of three years commencing on 1 November 2015 and expiring on 31 October 2018; and\nSusan Paterson\nas a member for a term of three years commencing on 22 June 2015 and expiring on 21 June 2...",
                "fulltext": "Pursuant to section 159D of the Education Act 1989, and section 28 of the Crown Entities Act 2004, I appoint to the Tertiary Education Commission\nJohn Spencer\nas chair for a term of two years commencing on 1 August 2015 and expiring on 31 July 2017; and\nJohn Morris\nas a member for a term of three years commencing on 1 November 2015 and expiring on 31 October 2018; and\nSusan Paterson\nas a member for a term of three years commencing on 22 June 2015 and expiring on 21 June 2018.\nDated at Wellington this 25th day of June 2015.\nHon STEVEN JOYCE, Minister for Tertiary Education, Skills and Employment.",
                "id": 36048690,
                "subject": [
                    "Departmental",
                    "Crown Entities Act",
                    "Education Act",
                    "Appointments/reappointments",
                    "Education"
                ],
                "title": "Appointments to the Tertiary Education Commission"
            },
            {
                "date": [
                    "2015-06-25 12:00:00 UTC"
                ],
                "description": "Pursuant to section 120 of the Health Practitioners Competence Assurance Act 2003, the Minister of Health reappoints\nSandra Ferdinand\nand appoints\nProfessor David Baxter\nThomas Scott Thomson\nas health practitioner members of the New Zealand Physiotherapy Board for three-year terms of office commencing on the date of this notification; and reappoints\nCameron McIver\nas a layperson member of the New Zealand Physiotherapy Board for a three-year term of office commencing on th...",
                "fulltext": "Pursuant to section 120 of the Health Practitioners Competence Assurance Act 2003, the Minister of Health reappoints\nSandra Ferdinand\nand appoints\nProfessor David Baxter\nThomas Scott Thomson\nas health practitioner members of the New Zealand Physiotherapy Board for three-year terms of office commencing on the date of this notification; and reappoints\nCameron McIver\nas a layperson member of the New Zealand Physiotherapy Board for a three-year term of office commencing on the date of this notification.\nDated at Wellington this 15th day of June 2015.\nHon Dr JONATHAN COLEMAN, Minister of Health.",
                "id": 36048691,
                "subject": [
                    "Departmental",
                    "Health Practitioners Competence Assurance Act",
                    "Appointments/reappointments",
                    "Health"
                ],
                "title": "Reappointments / appointments to the New Zealand Physiotherapy Board"
            },
            {
                "date": [
                    "2015-06-25 12:00:00 UTC"
                ],
                "description": "Pursuant to section 120 of the Health Practitioners Competence Assurance Act 2003, the Minister of Health appoints\nDr Blair Apperley\nDr Thomas Gordon Winter\nas health practitioner members of the Chiropractic Board for three-year terms of office commencing on the date of this notice\u2019s publication; and reappoints\nDr Kristin Grace\nas a health practitioner member of the Chiropractic Board for a three-year term of office commencing on the date of this notice\u2019s publication; and...",
                "fulltext": "Pursuant to section 120 of the Health Practitioners Competence Assurance Act 2003, the Minister of Health appoints\nDr Blair Apperley\nDr Thomas Gordon Winter\nas health practitioner members of the Chiropractic Board for three-year terms of office commencing on the date of this notice\u2019s publication; and reappoints\nDr Kristin Grace\nas a health practitioner member of the Chiropractic Board for a three-year term of office commencing on the date of this notice\u2019s publication; and reappoints\nProfessor Stefan John Pallister\nas a health practitioner member of the Chiropractic Board for a term of office commencing on the date of this notice\u2019s publication and ending on 10 September 2017.\nDated at Wellington this 15th day of June 2015.\nHon Dr JONATHAN COLEMAN, Minister of Health.",
                "id": 36048694,
                "subject": [
                    "Departmental",
                    "Health Practitioners Competence Assurance Act",
                    "Appointments/reappointments",
                    "Health"
                ],
                "title": "Reappointments / appointments to the Chiropractic Board"
            },
            {
                "date": [
                    "2015-06-25 12:00:00 UTC"
                ],
                "description": "Pursuant to section 120 of the Health Practitioners Competence Assurance Act 2003, the Minister of Health has appointed\nTania Kemp\nDr Kathryn Holloway\nas health practitioner members of the Nursing Council of New Zealand for three-year terms of office commencing on the date of this notice\u2019s publication; and\nDr Conway Powell\nas a layperson member of the Nursing Council of New Zealand for a three-year term of office commencing on the date of this notice\u2019s publication.\nDated ...",
                "fulltext": "Pursuant to section 120 of the Health Practitioners Competence Assurance Act 2003, the Minister of Health has appointed\nTania Kemp\nDr Kathryn Holloway\nas health practitioner members of the Nursing Council of New Zealand for three-year terms of office commencing on the date of this notice\u2019s publication; and\nDr Conway Powell\nas a layperson member of the Nursing Council of New Zealand for a three-year term of office commencing on the date of this notice\u2019s publication.\nDated at Wellington this 15th day of June 2015.\nHon Dr JONATHAN COLEMAN, Minister of Health.",
                "id": 36048688,
                "subject": [
                    "Departmental",
                    "Health Practitioners Competence Assurance Act",
                    "Appointments/reappointments",
                    "Health"
                ],
                "title": "Appointments to the Nursing Council of New Zealand"
            },
            {
                "date": [
                    "2015-06-25 12:00:00 UTC"
                ],
                "description": "Pursuant to section 4 of the Judicature Act 1908, His Excellency the Governor\u2011General of New Zealand, in the name and on behalf of Her Majesty The Queen, has been pleased to appoint\nNicholas Richard William Davidson, one of Her Majesty\u2019s Counsel, of Christchurch\na Judge of the High Court.\nDated at Wellington this 18th day of June 2015.\nHon CHRISTOPHER FINLAYSON, Attorney-General.",
                "fulltext": "Pursuant to section 4 of the Judicature Act 1908, His Excellency the Governor\u2011General of New Zealand, in the name and on behalf of Her Majesty The Queen, has been pleased to appoint\nNicholas Richard William Davidson, one of Her Majesty\u2019s Counsel, of Christchurch\na Judge of the High Court.\nDated at Wellington this 18th day of June 2015.\nHon CHRISTOPHER FINLAYSON, Attorney-General.",
                "id": 36048707,
                "subject": [
                    "Departmental",
                    "Judicature Act",
                    "Appointments/reappointments",
                    "Crown Law"
                ],
                "title": "Appointment of Judge of the High Court"
            },
            {
                "date": [
                    "2015-06-25 12:00:00 UTC"
                ],
                "description": "Pursuant to section 4 of the Judicature Act 1908, His Excellency the Governor\u2011General of New Zealand, in the name and on behalf of Her Majesty The Queen, has been pleased to appoint\nRebecca Anne Edwards, barrister and solicitor, of Auckland\na Judge of the High Court, the Commission to take effect from 1 August 2015.\nDated at Wellington this 18th day of June 2015.\nHon CHRISTOPHER FINLAYSON, Attorney-General.",
                "fulltext": "Pursuant to section 4 of the Judicature Act 1908, His Excellency the Governor\u2011General of New Zealand, in the name and on behalf of Her Majesty The Queen, has been pleased to appoint\nRebecca Anne Edwards, barrister and solicitor, of Auckland\na Judge of the High Court, the Commission to take effect from 1 August 2015.\nDated at Wellington this 18th day of June 2015.\nHon CHRISTOPHER FINLAYSON, Attorney-General.",
                "id": 36048708,
                "subject": [
                    "Departmental",
                    "Judicature Act",
                    "Appointments/reappointments",
                    "Crown Law"
                ],
                "title": "Appointment of Judge of the High Court"
            },
            {
                "date": [
                    "2015-06-25 12:00:00 UTC"
                ],
                "description": "Pursuant to section 28(1)(a) of the Crown Entities Act 2004 and section 8(1) of the Health Research Council Act 1990, the Minister of Health has appointed\nDr Suzanne Georgina Pitama\nas a member of the Health Research Commission for a three-year term of office commencing on 22 June 2015.\nDated at Wellington this 16th day of June 2015.\nHon Dr JONATHAN COLEMAN, Minister of Health.",
                "fulltext": "Pursuant to section 28(1)(a) of the Crown Entities Act 2004 and section 8(1) of the Health Research Council Act 1990, the Minister of Health has appointed\nDr Suzanne Georgina Pitama\nas a member of the Health Research Commission for a three-year term of office commencing on 22 June 2015.\nDated at Wellington this 16th day of June 2015.\nHon Dr JONATHAN COLEMAN, Minister of Health.",
                "id": 36048709,
                "subject": [
                    "Departmental",
                    "Crown Entities Act",
                    "Appointments/reappointments",
                    "Health"
                ],
                "title": "Appointment to the Health Research Council"
            },
            {
                "date": [
                    "2015-06-25 12:00:00 UTC"
                ],
                "description": "Pursuant to section 120 of the Health Practitioners Competence Assurance Act 2003, the Minister of Health appoints to the Medical Sciences Council of New Zealand\nLynne Morgan\nas a health practitioner member for a three-year term of office commencing on the date of this notification; and\nMichelle Wanwimolruk\nas a layperson member for a three-year term of office commencing on the date of this notification.\nDated at Wellington this 15th day of June 2015.\nHon Dr JONATHAN COLE...",
                "fulltext": "Pursuant to section 120 of the Health Practitioners Competence Assurance Act 2003, the Minister of Health appoints to the Medical Sciences Council of New Zealand\nLynne Morgan\nas a health practitioner member for a three-year term of office commencing on the date of this notification; and\nMichelle Wanwimolruk\nas a layperson member for a three-year term of office commencing on the date of this notification.\nDated at Wellington this 15th day of June 2015.\nHon Dr JONATHAN COLEMAN, Minister of Health.",
                "id": 36048693,
                "subject": [
                    "Departmental",
                    "Health Practitioners Competence Assurance Act",
                    "Appointments/reappointments",
                    "Health"
                ],
                "title": "Appointments to the Medical Sciences Council of New Zealand"
            }
        ]
    }
};
