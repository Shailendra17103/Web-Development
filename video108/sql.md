# OYO Graduate Trainee – Business Analyst: Top 50 Interview Questions with Solutions

---

## Excel & Power BI (15 Questions)

1. **What are the most advanced Excel functions you’ve used?**  
   *Solution:* Functions like `INDEX-MATCH` for flexible lookups, `SUMIFS` for conditional sums, and array formulas for complex calculations.

2. **How do you create a Pivot Table and what are its uses?**  
   *Solution:* Select data → Insert → Pivot Table. Pivot Tables help summarize, analyze, and visualize large datasets efficiently.

3. **Explain the difference between VLOOKUP, HLOOKUP, and INDEX-MATCH.**  
   *Solution:*  
   - `VLOOKUP` searches vertically; `HLOOKUP` horizontally.  
   - `INDEX-MATCH` is more flexible, allowing lookups left/right and supporting dynamic ranges.

4. **How would you clean and standardize data in Excel?**  
   *Solution:* Use `TRIM`, `CLEAN`, `UPPER/LOWER`, `Remove Duplicates`, and Data Validation for consistency.

5. **Tell me about a dashboard you built in Power BI.**  
   *Solution:* Created a sales dashboard with visuals for revenue, trends, region-wise breakdowns, and interactive filters for management.

6. **How do you connect Power BI to a data source?**  
   *Solution:* Use `Get Data` in Power BI, select the source (Excel, SQL, Web, etc.), authenticate, and load the data.

7. **What is DAX in Power BI and where have you used it?**  
   *Solution:* DAX (Data Analysis Expressions) is a formula language for calculated columns/measures, e.g., `[Total Sales] = SUM(Sales[Amount])`.

8. **How do you handle missing or duplicate data in Excel?**  
   *Solution:* Use `Filter` or `Conditional Formatting` for blanks, `Remove Duplicates` for redundancy, or fill blanks with `=IF(ISBLANK(...), ...)`.

9. **What are slicers in Power BI and how do they help?**  
   *Solution:* Slicers are visual filters that let users interactively filter data on dashboards.

10. **How do you publish and share reports in Power BI?**  
    *Solution:* Publish to Power BI Service, set permissions, and share links or embed reports for stakeholders.

11. **Explain how you would use conditional formatting for trend analysis.**  
    *Solution:* Apply color scales to highlight increasing/decreasing trends, or use icons to indicate performance thresholds.

12. **Describe a situation where you used Excel to automate a repetitive task.**  
    *Solution:* Used Macros/VBA to automate daily data imports, cleaning, and report generation, saving hours weekly.

13. **How do you visualize year-over-year growth in Power BI?**  
    *Solution:* Use line/bar charts with time-based axis, calculate YoY growth with DAX:  
    `YoY Growth = ([Current Year] - [Previous Year]) / [Previous Year]`.

14. **What are calculated columns and measures in Power BI?**  
    *Solution:*  
    - Calculated columns are computed row-by-row during data load.  
    - Measures are aggregate calculations performed during analysis (e.g., SUM, AVERAGE).

15. **How do you manage large datasets in Excel without performance issues?**  
    *Solution:* Use Tables, minimize volatile formulas, split data, use Power Query for ETL, and avoid unnecessary formatting.

---

## Python (10 Questions)

16. **How would you use Python to clean a dataset?**  
    *Solution:* Use pandas:  
    ```python
    import pandas as pd
    df = pd.read_csv('data.csv')
    df = df.drop_duplicates().dropna()
    df['col'] = df['col'].str.strip()
    ```

17. **Which libraries do you use for data analysis in Python?**  
    *Solution:* `pandas` for tabular data, `numpy` for arrays, `matplotlib`/`seaborn` for visualization.

18. **Write a Python script to calculate the average booking value from a list.**  
    *Solution:*
    ```python
    bookings = [100, 200, 150, 250]
    avg = sum(bookings) / len(bookings)
    print(avg)  # Output: 175.0
    ```

19. **How do you merge two dataframes in Python?**  
    *Solution:*  
    ```python
    merged = pd.merge(df1, df2, on='key_column')
    ```

20. **What’s the difference between a list and a dictionary in Python?**  
    *Solution:*  
    - List: Ordered, accessed by index.  
    - Dictionary: Unordered, accessed by key-value pairs.

21. **How would you visualize data in Python? Which libraries would you use?**  
    *Solution:* Use `matplotlib` or `seaborn`:  
    ```python
    import matplotlib.pyplot as plt
    plt.plot([1,2,3],[4,5,6])
    plt.show()
    ```

22. **How do you handle missing values in a Python dataframe?**  
    *Solution:*  
    ```python
    df = df.dropna()  # remove rows with missing values
    df = df.fillna(0) # replace missing with 0
    ```

23. **Give an example of using a loop to process data in Python.**  
    *Solution:*  
    ```python
    for val in bookings:
        print(val * 1.1)  # e.g., apply a 10% increase
    ```

24. **What is pandas, and how is it useful for business analysis?**  
    *Solution:* Pandas is a data manipulation library that supports reading, cleaning, transforming, and analyzing structured data efficiently.

25. **How would you automate data extraction with Python?**  
    *Solution:* Use `requests` for web APIs, schedule jobs with `cron` or `schedule`, and automate ETL pipelines:
    ```python
    import requests
    r = requests.get('https://api.example.com/data')
    data = r.json()
    ```

---

## SQL & Data Analysis Concepts (10 Questions)

26. **Write an SQL query to find the top 5 properties by booking volume.**  
    *Solution:*
    ```sql
    SELECT property_id, COUNT(*) AS bookings
    FROM bookings
    GROUP BY property_id
    ORDER BY bookings DESC
    LIMIT 5;
    ```

27. **What are JOINs in SQL? Explain different types of JOINs.**  
    *Solution:*  
    - JOINs combine rows from two tables based on related columns.  
    - INNER JOIN: Only matching rows.  
    - LEFT JOIN: All from left, matched from right.  
    - RIGHT JOIN: All from right, matched from left.  
    - FULL JOIN: All rows from both tables.

28. **How do you remove duplicates from a table using SQL?**  
    *Solution:*  
    ```sql
    DELETE FROM table
    WHERE id NOT IN (SELECT MIN(id) FROM table GROUP BY duplicate_column);
    ```

29. **How would you aggregate data to find monthly revenue?**  
    *Solution:*  
    ```sql
    SELECT DATE_FORMAT(date, '%Y-%m') as month, SUM(amount) as revenue
    FROM bookings
    GROUP BY month;
    ```

30. **What are KPIs? Which KPIs would you monitor for a hotel business?**  
    *Solution:* KPIs are Key Performance Indicators. For hotels: Occupancy Rate, RevPAR, ADR, Customer Satisfaction, Booking Growth.

31. **How would you define and calculate customer retention?**  
    *Solution:*  
    Retention = (Customers at End – New Customers) / Customers at Start

32. **What is data normalization and why is it important?**  
    *Solution:*  
    Data normalization organizes data to reduce redundancy and improve integrity, making storage efficient.

33. **How do you ensure data accuracy and integrity?**  
    *Solution:*  
    Use validation rules, remove duplicates, consistent formats, data audits, and referential integrity constraints.

34. **Describe a time you analyzed a large dataset and what insights you found.**  
    *Solution:*  
    Analyzed sales data for seasonal trends, found revenue spikes during holidays, recommended targeted campaigns.

35. **How would you use a dashboard to support business decision-making?**  
    *Solution:*  
    Dashboards visualize KPIs and trends, enable quick insights, and support data-driven decisions for management.

---

## Business Acumen & Scenarios (10 Questions)

36. **If bookings drop in one region, how would you approach the problem?**  
    *Solution:* Analyze booking data by region, investigate external factors, check for operational issues, and recommend corrective actions.

37. **How would you present complex data to a non-technical audience?**  
    *Solution:* Use simple visuals, avoid jargon, summarize key takeaways, and focus on actionable insights.

38. **Which metrics would you track for OYO’s vacation homes business?**  
    *Solution:* Occupancy Rate, Average Booking Value, Length of Stay, Guest Ratings, Revenue per Property.

39. **What factors would you analyze before launching OYO in a new city?**  
    *Solution:* Market demand, competitor presence, average room rates, local regulations, and demographic trends.

40. **How can data analysis improve guest experience for OYO?**  
    *Solution:* Identify pain points from feedback, optimize pricing, personalize offers, and enhance service based on trends.

41. **Tell us about a business problem you solved with data.**  
    *Solution:* Used sales data to identify underperforming products, recommended promotions, and improved revenue.

42. **If you have incomplete data, what steps would you take?**  
    *Solution:* Assess impact, attempt data recovery, use estimates or imputations, document assumptions, and proceed with caution.

43. **How do you prioritize requests from different business teams?**  
    *Solution:* Assess business impact, urgency, resource needs, align with goals, and communicate timelines.

44. **Give an example of a time when your analysis led to a business change.**  
    *Solution:* Found that weekend discounts increased occupancy, proposed a permanent offer, which boosted bookings.

45. **How do you work with cross-functional teams to define KPIs?**  
    *Solution:* Collaborate to understand goals, align KPIs with business objectives, iterate with feedback.

---

## Behavioral & General (5 Questions)

46. **Why do you want to join OYO?**  
    *Solution:* OYO’s global reach, data-driven culture, and growth opportunities excite me; I want to contribute to its dynamic team.

47. **Describe a time you worked under a tight deadline.**  
    *Solution:* Managed a last-minute reporting request, prioritized tasks, leveraged automation, and delivered ahead of schedule.

48. **How do you handle conflicting priorities?**  
    *Solution:* Communicate with stakeholders, assess impact, reprioritize tasks, and ensure transparency.

49. **Tell us about a time you learned a new tool or technology quickly.**  
    *Solution:* Learned Power BI in two weeks for a project, built interactive dashboards that impressed my team.

50. **Where do you see yourself in 5 years?**  
    *Solution:* In a senior analytics role, leading data-driven projects and helping shape business strategy at a global company like OYO.

---

*Prepared by GitHub Copilot. Ask for deeper explanations, code walkthroughs, or more scenario-based answers if needed!*

# Detailed Solutions for Argusoft Aptitude Test Questions

## Quantitative Aptitude

### Question 1: If the selling price of 15 articles is equal to the cost price of 20 articles, what is the gain percent?

**Detailed Solution:**
- Let's call the cost price of 1 article = ₹x
- Then cost price of 20 articles = 20x
- Since selling price of 15 articles equals cost price of 20 articles:
  - Selling price of 15 articles = 20x
  - Selling price of 1 article = 20x/15 = 4x/3
- Gain per article = Selling price - Cost price = 4x/3 - x = x/3
- Gain percentage = (Gain/Cost price) × 100 = (x/3)/x × 100 = 33.33%

### Question 2: What is the smallest number which when divided by 12, 16, and 24 leaves a remainder 4 in each case?

**Detailed Solution:**
- We need to find a number of the form LCM + 4
- LCM of 12, 16, and 24:
  - 12 = 2² × 3
  - 16 = 2⁴
  - 24 = 2³ × 3
  - Taking highest powers: LCM = 2⁴ × 3 = 16 × 3 = 48
- Required number = 48 + 4 = 52
- Verification:
  - 52 ÷ 12 = 4 remainder 4
  - 52 ÷ 16 = 3 remainder 4
  - 52 ÷ 24 = 2 remainder 4

### Question 3: A man's salary is increased by 10% and then again by 20%. Find the net increase percent.

**Detailed Solution:**
- Let the initial salary be x
- After 10% increase: x + 10% of x = 1.1x
- After further 20% increase: 1.1x + 20% of 1.1x = 1.1x × 1.2 = 1.32x
- Net increase = 1.32x - x = 0.32x
- Net increase percentage = (0.32x/x) × 100 = 32%

Alternatively:
- Net increase % = 10% + 20% + (10% × 20%) = 10 + 20 + 2 = 32%

### Question 4: What is 20% of 2/5 of 400?

**Detailed Solution:**
- 2/5 of 400 = 2/5 × 400 = 160
- 20% of 160 = 20/100 × 160 = 32

### Question 5: If 3 pencils cost as much as 4 erasers, and 4 pencils cost ₹12, what is the cost of 6 erasers?

**Detailed Solution:**
- 4 pencils cost ₹12
- Therefore, 1 pencil costs ₹12 ÷ 4 = ₹3
- Since 3 pencils cost as much as 4 erasers:
  - 3 pencils = 3 × ₹3 = ₹9
  - 4 erasers = ₹9
  - 1 eraser = ₹9 ÷ 4 = ₹2.25
- Therefore, 6 erasers = 6 × ₹2.25 = ₹13.50

### Question 6: If a train runs at 60 km/h for 30 min and at 80 km/h for the next 1 hour, what is the average speed?

**Detailed Solution:**
- Time in first leg = 30 minutes = 0.5 hours
- Distance in first leg = Speed × Time = 60 km/h × 0.5 h = 30 km
- Distance in second leg = 80 km/h × 1 h = 80 km
- Total distance = 30 km + 80 km = 110 km
- Total time = 0.5 h + 1 h = 1.5 h
- Average speed = Total distance ÷ Total time = 110 km ÷ 1.5 h = 73.33 km/h

### Question 7: Find the compound interest on ₹12000 for 2 years at 10% p.a. compounded annually.

**Detailed Solution:**
- Principal (P) = ₹12,000
- Rate (r) = 10% per annum = 0.1
- Time (t) = 2 years
- Using compound interest formula: A = P(1 + r)^t
  - A = 12,000(1 + 0.1)^2
  - A = 12,000 × 1.1^2
  - A = 12,000 × 1.21 = ₹14,520
- Compound Interest = Amount - Principal = ₹14,520 - ₹12,000 = ₹2,520

### Question 8: If x + 1/x = 5, find x^2 + 1/x^2.

**Detailed Solution:**
- We know x + 1/x = 5
- Squaring both sides: (x + 1/x)^2 = 5^2 = 25
- Expanding: x^2 + 2(x × 1/x) + 1/x^2 = 25
- Simplifying: x^2 + 2 + 1/x^2 = 25
- Therefore: x^2 + 1/x^2 = 25 - 2 = 23

### Question 9: If the sum of two numbers is 40 and their difference is 4, find the numbers.

**Detailed Solution:**
- Let the two numbers be a and b
- Given: a + b = 40 and a - b = 4
- Solving these two equations:
  - From first equation: a = 40 - b
  - Substituting in second: (40 - b) - b = 4
  - 40 - 2b = 4
  - -2b = -36
  - b = 18
- Substituting back: a = 40 - 18 = 22
- Therefore, the numbers are 22 and 18
- Verification: 22 + 18 = 40 and 22 - 18 = 4

### Question 10: If 40% of a number is 80, what is the number?

**Detailed Solution:**
- Let the number be x
- Given: 40% of x = 80
- Converting to equation: 0.4x = 80
- Dividing both sides by 0.4: x = 80 ÷ 0.4 = 200
- Therefore, the number is 200
- Verification: 40% of 200 = 0.4 × 200 = 80

## Logical Reasoning

### Question 11: Find the next number in the series: 2, 6, 12, 20, 30, ?

**Detailed Solution:**
- Let's find the differences between consecutive terms:
  - 6 - 2 = 4
  - 12 - 6 = 6
  - 20 - 12 = 8
  - 30 - 20 = 10
- We notice that the differences form an arithmetic progression: 4, 6, 8, 10
- The next difference should be 12
- Therefore, the next term is 30 + 12 = 42

### Question 12: Which is the odd one out: 3, 5, 11, 14, 17, 21

**Detailed Solution:**
- Let's analyze each number:
  - 3: odd prime number
  - 5: odd prime number
  - 11: odd prime number
  - 14: even composite number (2 × 7)
  - 17: odd prime number
  - 21: odd composite number (3 × 7)
- 14 is the only even number in the list, making it the odd one out.

### Question 13: If 'CAT' is coded as 3120, how is 'DOG' coded? (A=1, B=2, ..., Z=26; code=Position of each letter multiplied)

**Detailed Solution:**
- Position of each letter in the alphabet:
  - C is the 3rd letter
  - A is the 1st letter
  - T is the 20th letter
- 3 × 1 × 20 = 60
- For 'DOG':
  - D is the 4th letter
  - O is the 15th letter
  - G is the 7th letter
- 4 × 15 × 7 = 60 × 7 = 420
- Therefore, 'DOG' is coded as 420

### Question 14: Statements: All roses are flowers. Some flowers fade quickly. Conclusions: 1) Some roses fade quickly. 2) All roses fade quickly.

**Detailed Solution:**
- Given statements:
  - All roses are flowers (All R are F)
  - Some flowers fade quickly (Some F are Q)
- For conclusion 1: "Some roses fade quickly"
  - Since all roses are flowers, and some flowers fade quickly, it's possible that some roses are among the flowers that fade quickly
  - But it's not certain, so conclusion 1 does not necessarily follow
- For conclusion 2: "All roses fade quickly"
  - We only know that some flowers fade quickly, not all
  - Since roses are a subset of flowers, we cannot conclude that all roses fade quickly
  - Therefore, conclusion 2 does not follow

### Question 15: If '+' means '×', '-' means '+', '×' means '÷', and '÷' means '-', then 8 × 4 + 2 – 6 ÷ 3 = ?

**Detailed Solution:**
- Substituting the operations:
  - 8 × 4 + 2 – 6 ÷ 3 becomes 8 ÷ 4 × 2 + 6 - 3
- Following BODMAS (Brackets, Orders, Division, Multiplication, Addition, Subtraction):
  - 8 ÷ 4 = 2
  - 2 × 2 = 4
  - 4 + 6 = 10
  - 10 - 3 = 7
- Therefore, the result is 7

### Question 16: Find the missing term: 3, 8, 15, 24, ?, 48

**Detailed Solution:**
- Let's find the differences between consecutive terms:
  - 8 - 3 = 5
  - 15 - 8 = 7
  - 24 - 15 = 9
  - ? - 24 = ?
  - 48 - ? = ?
- We notice that the differences form an arithmetic progression: 5, 7, 9, ...
- The next difference should be 11
- Therefore, the missing term is 24 + 11 = 35
- Verification: 48 - 35 = 13, which continues the pattern (5, 7, 9, 11, 13)

### Question 17: If 'MANGO' is written as 'NAMGO', how is 'APPLE' written?

**Detailed Solution:**
- In 'MANGO' → 'NAMGO', we observe that the first two letters 'M' and 'A' are swapped
- Following the same pattern for 'APPLE':
  - The first two letters 'A' and 'P' should be swapped
  - 'APPLE' → 'PAPLE'

### Question 18: In a code language, 'BAT' is 'ABT', 'CAT' is 'ACT'. How is 'DOG' written?

**Detailed Solution:**
- Analyzing the pattern:
  - 'BAT' → 'ABT': The letters are arranged in alphabetical order
  - 'CAT' → 'ACT': Again, the letters are arranged in alphabetical order
- For 'DOG', arranging in alphabetical order:
  - D, G, O → D, G, O (alphabetically)
  - Therefore, 'DOG' is written as 'DGO'

### Question 19: Pointing to a woman, John said, "Her mother is the only daughter of my mother." How is John related to the woman?

**Detailed Solution:**
- "Her mother is the only daughter of my mother"
- The only daughter of John's mother would be John's sister
- So, the woman's mother is John's sister
- Therefore, John is the uncle of the woman

Correction: I made a mistake in the original answer. Let's rethink:
- "Her mother is the only daughter of my mother"
- The only daughter of John's mother is John's sister
- So, the woman's mother is John's sister
- This makes John the maternal uncle of the woman, not her father

### Question 20: Complete the series: 1, 4, 9, 16, 25, ?

**Detailed Solution:**
- The series consists of perfect squares:
  - 1 = 1² 
  - 4 = 2²
  - 9 = 3²
  - 16 = 4²
  - 25 = 5²
- The next term would be 6² = 36

## Data Interpretation

### Question 21: Pie chart: If 20% of a company's employees are in HR and the company has 800 employees, how many are in HR?

**Detailed Solution:**
- Total number of employees = 800
- Percentage of employees in HR = 20%
- Number of employees in HR = 20% of 800 = 0.2 × 800 = 160

### Question 22: Table: If a factory produces 120 units in Jan and 180 in Feb, what is the percentage increase?

**Detailed Solution:**
- Production in January = 120 units
- Production in February = 180 units
- Increase in production = 180 - 120 = 60 units
- Percentage increase = (Increase ÷ Original) × 100 = (60 ÷ 120) × 100 = 50%

### Question 23: Bar graph: If sales in 2018 and 2019 were 250 and 300 units respectively, what is the average?

**Detailed Solution:**
- Sales in 2018 = 250 units
- Sales in 2019 = 300 units
- Total sales = 250 + 300 = 550 units
- Number of years = 2
- Average sales = Total sales ÷ Number of years = 550 ÷ 2 = 275 units

### Question 24: Line graph: If production drops from 400 to 320 units, what is the percentage decrease?

**Detailed Solution:**
- Initial production = 400 units
- Final production = 320 units
- Decrease in production = 400 - 320 = 80 units
- Percentage decrease = (Decrease ÷ Original) × 100 = (80 ÷ 400) × 100 = 20%

### Question 25: Table: If 3 out of 20 products are defective, what is the defect rate?

**Detailed Solution:**
- Number of defective products = 3
- Total number of products = 20
- Defect rate = (Number of defectives ÷ Total) × 100 = (3 ÷ 20) × 100 = 15%

## Verbal Ability

### Question 26: Choose the correct synonym: 'Abundant'

**Detailed Solution:**
- 'Abundant' means existing in large quantities; plentiful
- Synonyms: plentiful, copious, ample, numerous, plenty, profuse, rich
- Therefore, 'Plentiful' is the correct synonym

### Question 27: Choose the correct antonym: 'Benevolent'

**Detailed Solution:**
- 'Benevolent' means kind, generous, charitable, well-meaning
- Antonyms: cruel, malicious, malevolent, unkind, mean
- Therefore, 'Malevolent' (wishing evil or harm to others) is the correct antonym

### Question 28: Fill in the blank: She _____ her work before the deadline.

**Detailed Solution:**
- The sentence requires a past tense verb that indicates finishing something
- Appropriate options: completed, finished, submitted, concluded
- "She completed her work before the deadline" is grammatically correct and contextually appropriate

### Question 29: Correct the sentence: 'He don't like mangoes.'

**Detailed Solution:**
- The error is in subject-verb agreement
- 'He' is third person singular and requires the verb form 'doesn't' not 'don't'
- Correct sentence: "He doesn't like mangoes."

### Question 30: Find the error: 'She is more smarter than him.'

**Detailed Solution:**
- The error is the double comparative 'more smarter'
- For comparatives, we either use 'more + adjective' or 'adjective+er', but not both
- Correct ways: "She is smarter than him" or "She is more smart than him" (though the first is preferable)

### Question 31: Choose the correct spelling: a) Recieve b) Receive

**Detailed Solution:**
- The correct spelling follows the rule "i before e except after c"
- Therefore, 'Receive' is the correct spelling

### Question 32: Choose the correct preposition: I am fond ____ music.

**Detailed Solution:**
- The adjective 'fond' is typically followed by the preposition 'of'
- Other examples: fond of reading, fond of children
- Therefore, "I am fond of music" is correct

### Question 33: Choose the word closest in meaning to 'Eminent'

**Detailed Solution:**
- 'Eminent' means famous and respected within a particular sphere
- Synonyms: distinguished, notable, renowned, esteemed, prominent, celebrated
- Therefore, 'Distinguished' is the word closest in meaning

### Question 34: Find the correctly punctuated sentence: a) Wow what a beautiful view! b) Wow! What a beautiful view!

**Detailed Solution:**
- 'Wow' is an exclamation and should be followed by an exclamation mark
- 'What a beautiful view' is a separate sentence/exclamation
- Therefore, "Wow! What a beautiful view!" is correctly punctuated

### Question 35: Choose the appropriate word: He is _____ honest man.

**Detailed Solution:**
- Before words beginning with vowel sounds, we use 'an' instead of 'a'
- 'Honest' begins with a silent 'h', so it starts with a vowel sound
- Therefore, "He is an honest man" is correct

## Miscellaneous/General Aptitude

### Question 36: A clock gains 5 minutes every hour. How many minutes will it gain in 6 hours?

**Detailed Solution:**
- The clock gains 5 minutes every hour
- In 6 hours, it will gain: 5 minutes × 6 = 30 minutes

### Question 37: Find the next term: 2, 5, 10, 17, ?

**Detailed Solution:**
- Let's find the differences between consecutive terms:
  - 5 - 2 = 3
  - 10 - 5 = 5
  - 17 - 10 = 7
- We notice that the differences form an arithmetic progression: 3, 5, 7
- The next difference should be 9
- Therefore, the next term is 17 + 9 = 26

### Question 38: If the perimeter of a square is 40 cm, what is its area?

**Detailed Solution:**
- Perimeter of a square = 4 × side
- 40 cm = 4 × side
- Side = 40 ÷ 4 = 10 cm
- Area of a square = side² = 10² = 100 cm²

### Question 39: What is the ratio of 2:3 and 4:5?

**Detailed Solution:**
- Let's convert these ratios to fractions:
  - 2:3 = 2/3
  - 4:5 = 4/5
- To find the ratio of these fractions, we divide them:
  - (2/3) ÷ (4/5) = (2/3) × (5/4) = 10/12 = 5/6
- Therefore, the ratio is 5:6

### Question 40: If the average of 6, 7, 8, and x is 10, find x.

**Detailed Solution:**
- The average of 6, 7, 8, and x is 10
- (6 + 7 + 8 + x) ÷ 4 = 10
- 21 + x = 40
- x = 19

### Question 41: A can do a work in 12 days, B in 16 days. Together, in how many days?

**Detailed Solution:**
- A's rate of work = 1/12 of the work per day
- B's rate of work = 1/16 of the work per day
- Combined rate of work = 1/12 + 1/16 = (4+3)/48 = 7/48 of the work per day
- Time taken to complete the work = 1 ÷ (Combined rate) = 1 ÷ (7/48) = 48/7 ≈ 6.86 days

### Question 42: If a:b = 2:3 and b:c = 4:5, find a:c.

**Detailed Solution:**
- From a:b = 2:3, if we take b = 3, then a = 2
- From b:c = 4:5, if we take b = 4, then c = 5
- But we need consistent values for b
- Let's find a common value for b by taking LCM of 3 and 4, which is 12
- If b = 12:
  - From a:b = 2:3, if b = 12, then a = 12 × (2/3) = 8
  - From b:c = 4:5, if b = 12, then c = 12 × (5/4) = 15
- Therefore, a:c = 8:15

### Question 43: Find the least number which is exactly divisible by 6, 8, and 9.

**Detailed Solution:**
- To find a number that is divisible by multiple numbers, we find the LCM
- Let's find the LCM of 6, 8, and 9:
  - 6 = 2 × 3
  - 8 = 2³
  - 9 = 3²
  - Taking the highest powers of each prime factor: LCM = 2³ × 3² = 8 × 9 = 72
- Therefore, 72 is the least number exactly divisible by 6, 8, and 9

### Question 44: How many 3-digit numbers can be formed using 1,2,3,4 if repetition is allowed?

**Detailed Solution:**
- We need to form 3-digit numbers using the digits 1, 2, 3, 4
- For a 3-digit number, the first digit cannot be 0 (but all our digits are non-zero anyway)
- With repetition allowed:
  - First position: 4 choices (1,2,3,4)
  - Second position: 4 choices (1,2,3,4)
  - Third position: 4 choices (1,2,3,4)
- Total number of ways = 4 × 4 × 4 = 64

### Question 45: If 3x – 7 = 11, what is x?

**Detailed Solution:**
- 3x - 7 = 11
- Adding 7 to both sides: 3x = 18
- Dividing both sides by 3: x = 6

## Puzzles/Reasoning

### Question 46: If all BLOOMS are FLOWERS and some FLOWERS are FRAGRANT, are all BLOOMS fragrant?

**Detailed Solution:**
- Given:
  - All BLOOMS are FLOWERS (100% of BLOOMS are FLOWERS)
  - Some FLOWERS are FRAGRANT (not all FLOWERS are FRAGRANT)
- Since only some FLOWERS are FRAGRANT, and BLOOMS are a subset of FLOWERS, we cannot conclude that all BLOOMS are FRAGRANT
- It's possible that all BLOOMS are in the non-FRAGRANT subset of FLOWERS
- Therefore, the conclusion "all BLOOMS are fragrant" does not necessarily follow

### Question 47: A bag contains 2 red, 3 blue, and 5 green balls. What is the probability of picking a blue ball?

**Detailed Solution:**
- Total number of balls = 2 (red) + 3 (blue) + 5 (green) = 10
- Number of favorable outcomes (blue balls) = 3
- Probability = Number of favorable outcomes ÷ Total number of possible outcomes
- Probability of picking a blue ball = 3 ÷ 10 = 0.3 or 3/10

### Question 48: If 5 books can be arranged in a shelf in how many ways?

**Detailed Solution:**
- This is a permutation problem where we need to arrange 5 distinct objects
- Number of ways to arrange 5 books = 5! = 5 × 4 × 3 × 2 × 1 = 120
- Therefore, 5 books can be arranged in 120 different ways

### Question 49: Which letter comes next: A, D, G, J, ?

**Detailed Solution:**
- Let's analyze the pattern by finding the position of each letter in the alphabet:
  - A is the 1st letter
  - D is the 4th letter
  - G is the 7th letter
  - J is the 10th letter
- We notice that each letter is 3 positions ahead of the previous one: 1, 4, 7, 10, ...
- The next letter would be at position 13, which is M
- Therefore, M comes next in the sequence

### Question 50: If in a certain code, INDIA is written as 91491, how is DINA written?

**Detailed Solution:**
- Let's find the code for each letter in 'INDIA':
  - I = 9
  - N = 1
  - D = 4
  - I = 9
  - A = 1
- So, 'DINA' would be coded as:
  - D = 4
  - I = 9
  - N = 1
  - A = 1
- Therefore, 'DINA' is written as 4911

Wait, I need to double-check this. The code for INDIA is 91491, which doesn't seem to follow a consistent pattern with my interpretation above. Let me reconsider:

- Looking at INDIA → 91491:
  - I → 9
  - N → 1
  - D → 4
  - I → 9
  - A → 1
- So DINA would be:
  - D → 4
  - I → 9
  - N → 1
  - A → 1
- Therefore, DINA = 4911