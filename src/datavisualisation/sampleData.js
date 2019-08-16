
const E1_AttendanceSummary_Data = [
  { name: 'Event 1', Participants: 249 },
  { name: 'Event 2', Participants: 524 },
  { name: 'Event 3', Participants: 419 },
  { name: 'Event 4', Participants: 258 },
  { name: 'Event 5', Participants: 202 },
];

const E2_EngagementSummary_Data =
  { NumEvent: 14, TotalParticipants: 1423, TotalActiveStudent: 3650 };

const E3_EventTimeline_Data = [
  { name: 'Event 1', Participants: 249, StartDate: "2018-04-22" },
  { name: 'Event 2', Participants: 524, StartDate: "2018-05-12" },
  { name: 'Event 3', Participants: 419, StartDate: "2018-06-25" },
  { name: 'Event 4', Participants: 258, StartDate: "2018-07-08" },
  { name: 'Event 5', Participants: 202, StartDate: "2018-08-30" },
];

const E4_EventCrossYear_Data = [
  { Year: 2014, Participants: 249, StartDate: "2018-04-22" },
  { Year: 2015, Participants: 524, StartDate: "2018-05-12" },
  { Year: 2016, Participants: 419, StartDate: "2018-06-25" },
  { Year: 2017, Participants: 258, StartDate: "2018-07-08" },
  { Year: 2018, Participants: 202, StartDate: "2018-08-30" },
];

const E7_EventTable_Data = [
  { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "Student A", "MATRICNUMBER": "U1512370", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "EVENTPOSITION": "President", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
  { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT81", "MATRICNUMBER": "U1512371", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "EVENTPOSITION": "Vice President Programme", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
  { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT82", "MATRICNUMBER": "U1512372", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "EVENTPOSITION": "Vice President Branding and Marketing", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
  { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT83", "MATRICNUMBER": "U1512373", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "EVENTPOSITION": "Vice President Technical", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
  {
    "TIMESTAMP": "00/00/00  0:00:00",
    "FULLNAME": "STUDENT84",
    "MATRICNUMBER": "U1512374",
    "NTUEMAILADDRESS": "",
    "EVENTNAME": "EEE TOP 2017 ENITIO",
    "EVENTPOSITION": "Vice President Games",
    "EVENTSTARTDATE": "2017-08-08",
    "EVENTENDDATE": "2017-08-12"
  },
];

const D1_MasterDropdown_Data = [
  "File 1", "File 2", "File 3"
];

const D2_EventDropdown_Data = [
  { name: 'Event 1', Participants: 249, StartDate: "2018-04-22" },
  { name: 'Event 2', Participants: 524, StartDate: "2018-05-12" },
  { name: 'Event 3', Participants: 419, StartDate: "2018-06-25" },
  { name: 'Event 4', Participants: 258, StartDate: "2018-07-08" },
  { name: 'Event 5', Participants: 202, StartDate: "2018-08-30" },
];

const P9_SkillSetRadarChart_Data = [
  { skillset: 'Math', IndividualScore: 120, max: 150 },
  { skillset: 'Chinese', IndividualScore: 98, max: 150 },
  { skillset: 'English', IndividualScore: 86, max: 150 },
  { skillset: 'Geography', IndividualScore: 99, max: 150 },
  { skillset: 'Physics', IndividualScore: 85, max: 150 },
];

const N1_SocialNetwork_Data = {
  nodes: [{ id: 'Wira', size: 100 }, { id: 'Huimin', size: 200 }, { id: 'Elaine', size: 300 }, { id: 'Rachel', size: 400 }],
  links: [{ source: 'Wira', target: 'Elaine' }, { source: 'Elaine', target: 'Huimin' }, { source: 'Rachel', target: 'Wira' }, { source: 'Rachel', target: 'Elaine' }]
};

const DynamicTableData = {
  "dynamic": "y",
  "columns": [
    "TIMESTAMP", "FULLNAME", "MATRICNUMBER", "NTUEMAILADDRESS", "EVENTNAME", "EVENTPOSITION", "EVENTSTARTDATE", "EVENTENDDATE"
  ],
  "data": [
    { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "Student A", "MATRICNUMBER": "U1512370A", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "EVENTPOSITION": "President", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
    { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "Troller", "MATRICNUMBER": "U1512371B", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "EVENTPOSITION": "Vice President Programme", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
    { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT82", "MATRICNUMBER": "U1512372C", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "EVENTPOSITION": "Vice President Branding and Marketing", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
    { "TIMESTAMP": "00/00/00  0:00:00", "FULLNAME": "STUDENT83", "MATRICNUMBER": "U1512373D", "NTUEMAILADDRESS": "", "EVENTNAME": "EEE TOP 2017 ENITIO", "EVENTPOSITION": "Vice President Technical", "EVENTSTARTDATE": "2017-08-08", "EVENTENDDATE": "2017-08-12" },
    {
      "TIMESTAMP": "00/00/00  0:00:00",
      "FULLNAME": "STUDENT84",
      "MATRICNUMBER": "U1512374E",
      "NTUEMAILADDRESS": "",
      "EVENTNAME": "EEE TOP 2017 ENITIO",
      "EVENTPOSITION": "Vice President Games",
      "EVENTSTARTDATE": "2017-08-08",
      "EVENTENDDATE": "2017-08-12"
    },
  ]
};

export {
  E1_AttendanceSummary_Data,
  E2_EngagementSummary_Data,
  E3_EventTimeline_Data,
  E4_EventCrossYear_Data,
  E7_EventTable_Data,
  D1_MasterDropdown_Data,
  D2_EventDropdown_Data,
  P9_SkillSetRadarChart_Data,
  N1_SocialNetwork_Data,
  DynamicTableData
};