# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# OYO Graduate Trainee – Business Analyst: 100 Interview Questions with Solutions

---

## Section 1: Excel & Power BI (25 Questions)

### 1. What is a Pivot Table? How would you use it to analyze hotel bookings data?
**Solution:**  
A Pivot Table is a tool in Excel for summarizing, analyzing, exploring, and presenting data. For hotel bookings, use a Pivot Table to summarize bookings by region, month, or hotel, calculate total revenue, average occupancy, or cancellations per property.

---

### 2. Explain VLOOKUP with an example relevant to OYO operations.
**Solution:**  
VLOOKUP finds data in a table by row. E.g., `=VLOOKUP(RoomID, RoomInventory, 3, FALSE)` fetches room status for a booking from the inventory table.

---

### 3. How do you use conditional formatting to highlight low occupancy rates?
**Solution:**  
Select occupancy cells → Home → Conditional Formatting → New Rule → "Format cells that are less than 0.75" → Set color (e.g., red). This highlights hotels with occupancy below 75%.

---

### 4. How would you use Excel to calculate the Average Daily Rate (ADR)?
**Solution:**  
ADR = Total Room Revenue / Number of Rooms Sold. In Excel:  
`=SUM(RoomRevenue)/SUM(RoomsSold)`

---

### 5. How can you automate repetitive data cleaning tasks in Excel?
**Solution:**  
Use Macros or Power Query. Record a Macro for repetitive tasks or use Power Query to clean, remove duplicates, and reformat data with a one-click refresh.

---

### 6. What is the difference between COUNTIF and SUMIF?
**Solution:**  
COUNTIF counts cells meeting a criterion, SUMIF sums values meeting a criterion.  
Example:  
`=COUNTIF(StatusRange, "Cancelled")`  
`=SUMIF(CityRange, "Delhi", RevenueRange)`

---

### 7. How would you combine data from different Excel sheets?
**Solution:**  
Use Power Query to merge tables or use formulas like VLOOKUP, INDEX-MATCH, or 3D references for combining data.

---

### 8. Describe a scenario where you would use a slicer in a dashboard.
**Solution:**  
Slicers provide visual filters. In an OYO occupancy dashboard, a slicer can filter data by property type, region, or month for interactive analysis.

---

### 9. What is Power BI and how can it enhance decision-making at OYO?
**Solution:**  
Power BI is a business analytics tool for interactive reports and dashboards. It connects to multiple data sources, enabling real-time monitoring of KPIs and trends for quick decision-making.

---

### 10. Explain how you would visualize month-wise revenue trends for each OYO property in Power BI.
**Solution:**  
Load booking data → Create a Line or Clustered Bar Chart → Axis: Month, Legend: Property, Value: Revenue → Use filters to view property-wise or region-wise revenue trends.

---

### 11. How do you use DAX in Power BI? Give an example.
**Solution:**  
DAX (Data Analysis Expressions) is a formula language for calculations.  
Example: To calculate RevPAR (Revenue per available room):  
`RevPAR = SUM(Revenue) / SUM(AvailableRooms)`

---

### 12. What are calculated columns and measures in Power BI?
**Solution:**  
Calculated columns are computed during data load and stored in the model; measures are calculated on the fly based on user interaction with the report.

---

### 13. How can you connect Power BI to different data sources?
**Solution:**  
Use "Get Data" in Power BI to connect to Excel, SQL, web APIs, cloud databases (like AWS, Azure), etc.

---

### 14. How can you refresh data automatically in Power BI?
**Solution:**  
Schedule refreshes in Power BI Service for datasets connected to cloud or on-premise sources using Gateway.

---

### 15. How do you handle missing or null data in Excel and Power BI?
**Solution:**  
In Excel: use `IFERROR`, `ISBLANK`, or filter out blanks. In Power BI: use Power Query's "Replace Values" or "Remove Rows" to handle missing data.

---

### 16. How would you use Excel to forecast future bookings?
**Solution:**  
Use the Forecast Sheet feature or apply formulas like `=FORECAST.LINEAR()` on historical bookings data.

---

### 17. What is the use of slicers and timelines in Excel dashboards?
**Solution:**  
Slicers filter PivotTables by category; timelines filter by date. Both provide interactive dashboard elements for users.

---

### 18. Show how you would calculate the cancellation rate for OYO bookings in Excel.
**Solution:**  
`=COUNTIF(StatusRange, "Cancelled") / COUNTA(StatusRange)`

---

### 19. How can you visualize booking source distribution in Excel?
**Solution:**  
Create a Pie Chart using Insert → Pie Chart, with category as booking source and values as booking counts.

---

### 20. How would you automate the creation of a monthly performance report?
**Solution:**  
Use Power Query to auto-refresh data, set up PivotTables/Charts, and record a Macro to export or format the report monthly.

---

### 21. How can you use Excel’s Data Validation feature for data entry?
**Solution:**  
Restrict inputs to lists (e.g., property types), numbers within limits (e.g., rates), or dates using Data → Data Validation.

---

### 22. Explain the use of INDEX-MATCH over VLOOKUP.
**Solution:**  
INDEX-MATCH is more flexible, can search both left and right, and is faster with large datasets than VLOOKUP.

---

### 23. How would you calculate RevPAR (Revenue per Available Room) in Excel?
**Solution:**  
`=SUM(TotalRevenue) / SUM(AvailableRooms)`

---

### 24. How can you use Excel to find duplicate bookings?
**Solution:**  
Use Conditional Formatting → Highlight Duplicates on Booking ID column, or use `=COUNTIF(Range, Criteria)>1` to flag duplicates.

---

### 25. How would you create a dynamic dashboard in Excel?
**Solution:**  
Use PivotTables, PivotCharts, slicers, and dynamic named ranges to create interactive dashboards that update with new data.

---

## Section 2: SQL (20 Questions)

### 26. Write a SQL query to find the top 5 hotels by revenue last month.
**Solution:**  
```sql
SELECT hotel_id, SUM(revenue) AS total_revenue
FROM bookings
WHERE booking_date BETWEEN DATE_SUB(CURDATE(), INTERVAL 1 MONTH) AND CURDATE()
GROUP BY hotel_id
ORDER BY total_revenue DESC
LIMIT 5;
```

---

### 27. How would you find the average occupancy rate by city in SQL?
**Solution:**  
```sql
SELECT city, AVG(rooms_occupied/total_rooms) AS avg_occupancy
FROM hotels
GROUP BY city;
```

---

### 28. Write a query to identify customers who have booked more than 3 different cities.
**Solution:**  
```sql
SELECT customer_id, COUNT(DISTINCT city) AS cities_booked
FROM bookings
GROUP BY customer_id
HAVING cities_booked > 3;
```

---

### 29. How would you join bookings and hotels tables to get hotel name with each booking?
**Solution:**  
```sql
SELECT b.*, h.hotel_name
FROM bookings b
JOIN hotels h ON b.hotel_id = h.hotel_id;
```

---

### 30. Write a query to calculate month-over-month growth in bookings for each hotel.
**Solution:**  
Use a CTE to get monthly bookings, then join with previous month’s data.
```sql
WITH monthly AS (
  SELECT hotel_id, DATE_FORMAT(booking_date, '%Y-%m') AS month, COUNT(*) AS bookings
  FROM bookings
  GROUP BY hotel_id, month
)
SELECT a.hotel_id, a.month, a.bookings, b.bookings AS prev_month_bookings,
      (a.bookings - b.bookings)/b.bookings*100 AS growth_pct
FROM monthly a
LEFT JOIN monthly b
ON a.hotel_id = b.hotel_id AND a.month = DATE_FORMAT(DATE_ADD(b.month, INTERVAL 1 MONTH), '%Y-%m');
```

---

### 31. How do you use GROUP BY and HAVING together?
**Solution:**  
`GROUP BY` aggregates rows, `HAVING` filters groups. E.g., to find hotels with avg occupancy above 80%:
```sql
SELECT hotel_id, AVG(occupancy) AS avg_occ
FROM bookings
GROUP BY hotel_id
HAVING avg_occ > 0.8;
```

---

### 32. Write a query to get the most common booking source.
**Solution:**  
```sql
SELECT booking_source, COUNT(*) AS cnt
FROM bookings
GROUP BY booking_source
ORDER BY cnt DESC
LIMIT 1;
```

---

### 33. How do you update the room rate for all rooms in a city?
**Solution:**  
```sql
UPDATE rooms
SET rate = rate * 1.05
WHERE city = 'Delhi';
```

---

### 34. Write a query to find all hotels with no bookings in the last month.
**Solution:**  
```sql
SELECT h.hotel_id, h.hotel_name
FROM hotels h
LEFT JOIN bookings b ON h.hotel_id = b.hotel_id AND b.booking_date >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)
WHERE b.booking_id IS NULL;
```

---

### 35. How would you calculate the cancellation rate in SQL?
**Solution:**  
```sql
SELECT COUNT(*) AS cancellations, 
       (SELECT COUNT(*) FROM bookings) AS total,
       COUNT(*)/(SELECT COUNT(*) FROM bookings)::float AS cancel_rate
FROM bookings
WHERE status = 'Cancelled';
```

---

### 36. Write a query to rank hotels by total revenue in each city.
**Solution:**  
```sql
SELECT hotel_id, city, revenue,
       RANK() OVER(PARTITION BY city ORDER BY revenue DESC) AS city_rank
FROM hotels;
```

---

### 37. How do you write a query to count distinct users every month?
**Solution:**  
```sql
SELECT DATE_FORMAT(booking_date, '%Y-%m') AS month, COUNT(DISTINCT customer_id) AS users
FROM bookings
GROUP BY month;
```

---

### 38. Write a query to get average length of stay by booking source.
**Solution:**  
```sql
SELECT booking_source, AVG(DATEDIFF(checkout_date, checkin_date)) AS avg_stay
FROM bookings
GROUP BY booking_source;
```

---

### 39. How do you handle NULLs in SQL when calculating averages?
**Solution:**  
SQL’s `AVG()` ignores NULLs. Use `COALESCE` to replace NULLs with zero if needed:  
`AVG(COALESCE(column, 0))`

---

### 40. Write a query to find hotels with declining occupancy over the last three months.
**Solution:**  
Aggregate occupancy by hotel and month, then compare months using window functions or self joins.

---

### 41. Write a query to calculate RevPAR for each hotel.
**Solution:**  
```sql
SELECT hotel_id, SUM(revenue)/SUM(available_rooms) AS revpar
FROM bookings
GROUP BY hotel_id;
```

---

### 42. What is a window function? Give an example.
**Solution:**  
A window function performs calculations across a set of rows related to the current row.  
E.g.,  
```sql
SELECT hotel_id, revenue, AVG(revenue) OVER(PARTITION BY city) AS city_avg
FROM hotels;
```

---

### 43. How would you get the top 3 most popular room types per city?
**Solution:**  
```sql
SELECT city, room_type, COUNT(*) AS cnt,
       RANK() OVER(PARTITION BY city ORDER BY COUNT(*) DESC) AS rk
FROM bookings
GROUP BY city, room_type
HAVING rk <= 3;
```

---

### 44. Write a query to find properties with bookings in every month of the year.
**Solution:**  
```sql
SELECT hotel_id
FROM (SELECT hotel_id, MONTH(booking_date) AS mn FROM bookings GROUP BY hotel_id, mn) t
GROUP BY hotel_id
HAVING COUNT(mn) = 12;
```

---

### 45. What is the difference between INNER JOIN and LEFT JOIN?
**Solution:**  
INNER JOIN returns rows with matching keys in both tables; LEFT JOIN returns all rows from the left table and matching rows from the right, using NULL for missing matches.

---

## Section 3: Python/R/Analytics (20 Questions)

### 46. How would you use Python pandas to clean a hotel bookings dataset?
**Solution:**  
- Load data: `df = pd.read_csv('bookings.csv')`
- Drop duplicates: `df.drop_duplicates(inplace=True)`
- Handle missing: `df.fillna(0, inplace=True)`
- Type conversion: `df['date'] = pd.to_datetime(df['date'])`

---

### 47. Write Python code to calculate average occupancy by city.
**Solution:**  
```python
df.groupby('city')['occupancy'].mean()
```

---

### 48. How do you merge two datasets in pandas?
**Solution:**  
```python
pd.merge(df1, df2, on='hotel_id', how='inner')
```

---

### 49. How do you create a line chart of daily revenue using matplotlib?
**Solution:**  
```python
import matplotlib.pyplot as plt
df.groupby('date')['revenue'].sum().plot()
plt.show()
```

---

### 50. How would you use Python to calculate the cancellation rate?
**Solution:**  
```python
cancel_rate = df[df['status']=='Cancelled'].shape[0] / df.shape[0]
```

---

### 51. How do you handle missing values in Python?
**Solution:**  
- Drop: `df.dropna()`
- Fill: `df.fillna(0)` or `df.fillna(df.mean())`

---

### 52. How would you build a predictive model for occupancy?
**Solution:**  
- Feature engineering (dates, events, price)
- Split data
- Use regression (e.g., LinearRegression from sklearn)
- Evaluate with RMSE

---

### 53. How do you use R for data visualization?
**Solution:**  
Use `ggplot2` for charts:  
```R
library(ggplot2)
ggplot(df, aes(x=date, y=revenue)) + geom_line()
```

---

### 54. What is the use of `groupby` in pandas?
**Solution:**  
It splits data into groups for aggregate analysis (sum, mean, count).

---

### 55. Write Python code to find the top 5 customers by spending.
**Solution:**  
```python
top_customers = df.groupby('customer_id')['revenue'].sum().sort_values(ascending=False).head(5)
```

---

### 56. How would you visualize booking trends by source in Python?
**Solution:**  
```python
import seaborn as sns
sns.countplot(data=df, x='booking_source')
plt.show()
```

---

### 57. How do you use a random forest in Python for classification?
**Solution:**  
```python
from sklearn.ensemble import RandomForestClassifier
model = RandomForestClassifier()
model.fit(X_train, y_train)
```

---

### 58. How do you evaluate a regression model’s accuracy?
**Solution:**  
Use metrics like RMSE, MAE, R² score.  
```python
from sklearn.metrics import mean_squared_error, r2_score
```

---

### 59. How do you select features for a predictive model?
**Solution:**  
Use correlation, domain knowledge, feature importance from models, or recursive feature elimination.

---

### 60. What is cross-validation?
**Solution:**  
A way to assess model performance by splitting data into several train-test sets and averaging results.

---

### 61. How do you visualize correlations in data?
**Solution:**  
Use a heatmap:  
```python
sns.heatmap(df.corr())
```

---

### 62. How would you use Python to automate a daily report?
**Solution:**  
Write a script to load, process, and export data, then schedule with Task Scheduler or cron.

---

### 63. How do you detect and handle outliers?
**Solution:**  
Use boxplots, z-scores, or IQR method and decide to remove or cap them.

---

### 64. Explain the difference between supervised and unsupervised learning.
**Solution:**  
Supervised uses labeled data (regression/classification); unsupervised finds patterns/clusters in unlabeled data.

---

### 65. What is a confusion matrix?
**Solution:**  
A table showing correct and incorrect classifications for each class, used to evaluate classification models.

---

## Section 4: Business & Analytical Thinking (15 Questions)

### 66. What KPIs would you track for a hotel chain like OYO?
**Solution:**  
Occupancy Rate, ADR, RevPAR, Cancellation Rate, Guest Satisfaction, Revenue, Booking Source Mix, Average Length of Stay.

---

### 67. How would you determine the effectiveness of a promotional campaign?
**Solution:**  
Compare bookings, revenue, and occupancy before and after the campaign; use A/B testing if possible.

---

### 68. How do you prioritize tasks in a fast-paced environment?
**Solution:**  
Assess urgency and impact, use Eisenhower Matrix, communicate with stakeholders, and focus on high-value tasks.

---

### 69. How would you analyze customer churn?
**Solution:**  
Track repeat bookings, identify drop-offs, segment by cause (price, experience), and build a churn prediction model.

---

### 70. How do you communicate complex insights to non-technical stakeholders?
**Solution:**  
Use simple visuals, avoid jargon, tell a story with the data, and focus on actionable recommendations.

---

### 71. How would you decide whether to open a new hotel in a city?
**Solution:**  
Analyze market demand, competitor supply, ADR trends, local events, and occupancy rates. Estimate ROI.

---

### 72. What are the risks of relying solely on historical data for forecasting?
**Solution:**  
Doesn’t account for sudden changes (pandemics, new competitors), seasonality, or external factors.

---

### 73. How do you ensure data accuracy in reports?
**Solution:**  
Validate sources, cross-check numbers, automate data pulls, and peer review reports.

---

### 74. What is the value of benchmarking for OYO?
**Solution:**  
Helps compare performance against peers, identify gaps, and set realistic targets.

---

### 75. How would you identify underperforming properties?
**Solution:**  
Compare KPIs (occupancy, ADR, reviews) to benchmarks; look for trends of decline.

---

### 76. How do you handle conflicting priorities from different teams?
**Solution:**  
Clarify business goals, communicate, negotiate timelines, and escalate if needed.

---

### 77. Give an example of a data-driven decision you would make at OYO.
**Solution:**  
Adjust pricing for a property based on occupancy trends and competitor analysis.

---

### 78. How would you estimate the impact of a new feature (e.g., loyalty program)?
**Solution:**  
Run a pilot, track key metrics (repeat rate, spend), compare with control group, analyze statistical significance.

---

### 79. How would you build a dashboard for the CEO?
**Solution:**  
Focus on high-level KPIs, keep visuals simple, add filters for drill-down, and automate data refresh.

---

### 80. What are the challenges in aggregating data from multiple sources?
**Solution:**  
Inconsistent formats, missing values, duplicate records, data latency, integration complexity.

---

## Section 5: Big Data, Visualization, and Advanced Analytics (10 Questions)

### 81. What is AWS and how can it be used in hospitality analytics?
**Solution:**  
AWS is Amazon Web Services, a cloud platform for scalable storage, compute, and analytics. Use AWS Redshift, S3, Glue for big data ETL, storage, and querying.

---

### 82. What is Hive and why would OYO use it?
**Solution:**  
Hive is a data warehouse tool for querying large datasets on Hadoop using SQL-like syntax. OYO can use it for scalable reporting and analytics.

---

### 83. What is a BI tool? Give examples relevant to OYO.
**Solution:**  
A BI (Business Intelligence) tool enables data visualization and reporting. Examples: Power BI, Tableau, Qlik Sense, Metabase.

---

### 84. How would you use Tableau to visualize hotel performance?
**Solution:**  
Connect to data, drag-and-drop dimensions/measures, use filters and calculated fields, create interactive dashboards for occupancy, ADR, and RevPAR.

---

### 85. What is a data lake?
**Solution:**  
A storage repository holding raw data in various formats. Allows OYO to collect, store, and analyze data at scale.

---

### 86. How can you use Presto for analytics at OYO?
**Solution:**  
Presto is a distributed SQL engine for fast querying of large datasets across multiple sources (S3, Hive, MySQL).

---

### 87. What is statistical modeling?
**Solution:**  
Using mathematical models (regression, clustering) to represent data patterns and make predictions.

---

### 88. Name two data visualization techniques for time series data.
**Solution:**  
Line charts, area charts.

---

### 89. How would you use a scatter plot in hotel analytics?
**Solution:**  
Visualize the relationship between ADR and occupancy, or reviews and revenue.

---

### 90. What is the purpose of ETL in data analytics?
**Solution:**  
ETL stands for Extract, Transform, Load. It prepares data from multiple sources for analysis in a data warehouse.

---

## Section 6: Communication, Situational & Miscellaneous (10 Questions)

### 91. How do you explain a technical solution to someone with no technical background?
**Solution:**  
Use analogies, simple language, focus on business impact, and avoid jargon.

---

### 92. What would you do if stakeholders disagree on a metric definition?
**Solution:**  
Facilitate discussion, agree on business objectives, document definitions, and ensure alignment.

---

### 93. How do you ensure data privacy and security?
**Solution:**  
Follow company policies, restrict access, anonymize sensitive data, and use secure tools.

---

### 94. How do you keep yourself updated with latest analytics trends?
**Solution:**  
Read industry blogs, join webinars, attend conferences, and network with peers.

---

### 95. Describe a situation where your analysis changed a business outcome.
**Solution:**  
[Your own example: e.g., analysis led to a change in pricing strategy, increasing bookings by 10%.]

---

### 96. How do you handle missing a project deadline?
**Solution:**  
Communicate early, explain reasons, update plan, and prioritize tasks to minimize impact.

---

### 97. How do you handle ambiguous problems?
**Solution:**  
Break down the problem, gather data, ask clarifying questions, and iterate solutions.

---

### 98. What are good practices for dashboard design?
**Solution:**  
Keep it simple, highlight key metrics, use consistent colors, and enable interactivity.

---

### 99. How do you manage stress in high-pressure situations?
**Solution:**  
Prioritize, delegate if possible, take breaks, and focus on solutions.

---

### 100. Why do you want to work at OYO as a Business Analyst?
**Solution:**  
[Personalize your answer: e.g., "OYO’s scale and data-driven culture excite me. I want to contribute to global hospitality by leveraging my analytical and technical skills."]

---

**End of Document**