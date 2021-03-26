---
id: healthcare
title: Healthcare Use Cases
sidebar_label: Healthcare
slug: /healthcare
---

## Case 1
A 53 year-old gentleman shows up for an appointment with a primary care physician  (general practitioner in the UK) and says that he’s interested in preventive care in order to  stay healthy.

What are the recommended preventive care measures?

Search Results | United States Preventive Services Taskforce

Colorectal Cancer: Screening

The USPSTF recommends screening for colorectal cancer starting at age  50 years and continuing until age 75 years.
The risks and benefits of different screening methods vary. See the Clinical Considerations section and the Table for details about screening  strategies.

Clinical Considerations

## Case 2
A 54 year-old woman comes in to the office complaining of a new sharp pang in her chest  that she’s been experiencing most days of the week for the past 3 weeks or so (she cannot  recall exactly) that comes for 20 minutes at a time whenever she’s feeling stressed. She  does recall feeling more stressed lately after conversations over the holidays with family  about not getting together given COVID-19 case rates. Her EKG is normal sinus rhythm  without ischemic changes.  

What are the recommended steps? See ACC/AHA Clinical Practice Guidelines on  Diagnosis of Stable Ischemic Heart Disease

Refer for noninvasive stress testing imaging What is the most appropriate  imaging modality…

One would want to be able to make statements like…

(a:Preventive_Care)-[:REDUCES {likelihood: $value}]->(o:Outcome_of_Interest) (a:Preventive_Care)-[:INCREASES {likelihood: $value}]->(o:Outcome_of_Interest)

where Preventive_Care might be a measure like screening for colon cancer using fecal  occult blood or colonoscopy, or like referring for a stress
where Outcome_of_Interest might be:

- Death
- Pain
- Disability

But the reality is that
(g:CPG)-[:RECOMMENDS]->(a:Preventive_Care) (s:STUDY {intervention: $value})-[:INFORMS]->(g:CPG)
