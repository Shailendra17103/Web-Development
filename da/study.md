# Python for Data Analysts
## Comprehensive Interview Preparation Guide

## Table of Contents

### Part I: Python Fundamentals
1. [Introduction to Python](#introduction-to-python)
2. [Variables and Data Types](#variables-and-data-types)
3. [Operators](#operators)
4. [Control Flow](#control-flow)
5. [Data Structures](#data-structures)
   - [Lists](#lists)
   - [Tuples](#tuples)
   - [Dictionaries](#dictionaries)
   - [Sets](#sets)
6. [Functions](#functions)
7. [Modules and Packages](#modules-and-packages)
8. [File Handling](#file-handling)
9. [Exception Handling](#exception-handling)
10. [List Comprehensions](#list-comprehensions)
11. [Lambda Functions](#lambda-functions)
12. [Object-Oriented Programming](#object-oriented-programming)

### Part II: Python Libraries for Data Analysis
13. [NumPy](#numpy)
14. [Pandas](#pandas)
15. [Data Visualization](#data-visualization)
    - [Matplotlib](#matplotlib)
    - [Seaborn](#seaborn)
16. [Statistical Analysis](#statistical-analysis)
17. [Machine Learning Integration](#machine-learning-integration)

---

# Part I: Python Fundamentals

## Introduction to Python

Python is a high-level, interpreted programming language known for its simplicity and readability. For data analysts, Python offers an ideal balance of ease of use and powerful capabilities through its extensive ecosystem of data-focused libraries.

**Key Features for Data Analysis:**
- Simple, readable syntax
- Dynamic typing
- Rich library ecosystem (NumPy, Pandas, Matplotlib, etc.)
- Strong community support
- Versatility across data tasks

**Role in Data Analysis Workflow:**
- Data collection and scraping
- Data cleaning and preprocessing
- Exploratory data analysis
- Statistical analysis
- Data visualization
- Building predictive models
- Report generation

**Example:**
```python
# Simple data summary
records = 1000
analyzed = 950
print(f"Analyzed {analyzed}/{records} records ({analyzed/records*100}%)")
```

## Variables and Data Types

Variables in Python are dynamically typed, meaning the interpreter automatically determines the data type based on the assigned value.

**Basic Data Types:**

**1. Integers (int):** Whole numbers without decimal points.
```python
count = 42
year = 2025
```

**2. Floating-Point Numbers (float):** Numbers with decimal points.
```python
price = 19.99
growth_rate = 2.5
```

**3. Strings (str):** Text data enclosed in quotes.
```python
name = "Data Analyst"
query = 'SELECT * FROM table'
```

**4. Booleans (bool):** Logical values - True or False.
```python
is_valid = True
has_missing_values = False
```

**5. None:** Special type representing absence of value.
```python
result = None
```

**Type Conversion:**
Python allows conversion between data types using built-in functions.
```python
# Converting between types
int_value = int("42")
str_value = str(42)
float_value = float("3.14")
```

**Type Checking:**
```python
# Check data type
type(42)  # <class 'int'>
isinstance(42, int)  # True
```

## Operators

Operators allow you to perform operations on variables and values.

**Arithmetic Operators:**
- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/` (returns float)
- Floor Division: `//` (returns integer)
- Modulus: `%` (remainder)
- Exponentiation: `**`

```python
a, b = 10, 3
print(a + b, a - b, a * b)  # 13 7 30
print(a / b, a // b, a % b)  # 3.333... 3 1
print(a ** b)  # 1000
```

**Comparison Operators:**
- Equal to: `==`
- Not equal to: `!=`
- Greater than: `>`
- Less than: `<`
- Greater than or equal to: `>=`
- Less than or equal to: `<=`

```python
x, y = 5, 10
print(x == y, x != y)  # False True
print(x < y, x <= y)   # True True
```

**Logical Operators:**
- `and`: True if both statements are true
- `or`: True if at least one statement is true
- `not`: Inverts the result

```python
a, b = True, False
print(a and b, a or b, not a)  # False True False
```

**Assignment Operators:**
- Basic assignment: `=`
- Combined operations: `+=`, `-=`, `*=`, `/=`, etc.

```python
x = 10
x += 5  # x is now 15
```

## Control Flow

Control flow structures determine the execution order of statements.

**Conditional Statements:**

The `if-elif-else` structure allows code execution based on conditions.

```python
score = 85
if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
else:
    grade = 'F'
```

**Ternary Operator:**
A compact way to write simple if-else statements.

```python
status = "Adult" if age >= 18 else "Minor"
```

**Loops:**

**For Loops:** Iterate over sequences (lists, tuples, strings, etc.).
```python
# Iterating through a list
for value in [1, 2, 3, 4]:
    print(value)

# Using range
for i in range(5):  # 0 to 4
    print(i)

# With enumerate for index and value
for i, name in enumerate(["Alice", "Bob"]):
    print(f"{i}: {name}")
```

**While Loops:** Continue execution as long as a condition is true.
```python
count = 0
while count < 5:
    print(count)
    count += 1
```

**Loop Control Statements:**
- `break`: Exit the loop
- `continue`: Skip to the next iteration
- `pass`: Do nothing (placeholder)

```python
for i in range(10):
    if i == 3:
        continue  # Skip 3
    if i == 7:
        break     # Stop at 7
    print(i)
```

## Data Structures

### Lists

Lists are ordered, mutable collections that can contain mixed data types.

**Key Characteristics:**
- Ordered collection
- Mutable (can be changed)
- Allow duplicates
- Access by index
- Can contain mixed data types

**Creating Lists:**
```python
empty_list = []
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]
```

**Accessing Elements:**
```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])     # First element: apple
print(fruits[-1])    # Last element: cherry
print(fruits[1:3])   # Slice: ['banana', 'cherry']
```

**Common List Methods:**
```python
numbers = [3, 1, 4, 1, 5]
numbers.append(9)    # Add to end
numbers.insert(1, 2) # Insert at position
numbers.remove(1)    # Remove first occurrence
numbers.sort()       # Sort in place
numbers.reverse()    # Reverse in place
length = len(numbers)# Get length
```

**List Operations:**
```python
a = [1, 2, 3]
b = [4, 5]
combined = a + b           # Concatenation
repeated = a * 3           # Repetition
exists = 2 in a            # Membership test
```

**List Iteration:**
```python
numbers = [10, 20, 30, 40]
for num in numbers:
    print(num)
```

### Tuples

Tuples are ordered, immutable sequences.

**Key Characteristics:**
- Ordered collection
- Immutable (cannot be changed)
- Allow duplicates
- Access by index
- Can contain mixed data types
- More memory efficient than lists

**Creating Tuples:**
```python
empty_tuple = ()
single_item = (1,)  # Note the comma
coordinates = (10, 20, 30)
mixed = (1, "hello", True)
```

**Accessing Elements:**
```python
point = (3, 4, 5)
print(point[0])    # 3
print(point[-1])   # 5
print(point[0:2])  # (3, 4)
```

**Tuple Methods:**
```python
values = (1, 2, 2, 3, 4)
count = values.count(2)  # 2
index = values.index(3)  # 3
```

**Tuple Unpacking:**
```python
# Unpacking values
x, y, z = (1, 2, 3)

# Swapping values
a, b = 5, 10
a, b = b, a  # Now a=10, b=5
```

### Dictionaries

Dictionaries store data as key-value pairs.

**Key Characteristics:**
- Unordered collection (Python 3.7+ preserves insertion order)
- Keys must be unique and immutable
- Values can be any data type
- Mutable (can be changed)
- Fast lookup by key

**Creating Dictionaries:**
```python
empty_dict = {}
person = {"name": "John", "age": 30, "city": "New York"}
another_dict = dict(name="Alice", age=25)
```

**Accessing and Modifying:**
```python
customer = {"id": 123, "name": "Sarah", "points": 150}

# Access values
print(customer["name"])  # Sarah
print(customer.get("age", "Not found"))  # Not found

# Modify values
customer["points"] = 200
customer["email"] = "sarah@example.com"  # Add new key-value

# Remove key-value
del customer["id"]
age = customer.pop("age", None)
```

**Dictionary Methods:**
```python
info = {"name": "Alex", "role": "Analyst"}
keys = info.keys()              # View of keys
values = info.values()          # View of values
items = info.items()            # View of (key, value) pairs
info.update({"salary": 75000})  # Update multiple keys
```

**Dictionary Iteration:**
```python
profile = {"name": "Maya", "dept": "Data", "hire_year": 2020}

# Iterate through keys (default)
for key in profile:
    print(key)

# Iterate through key-value pairs
for key, value in profile.items():
    print(f"{key}: {value}")
```

### Sets

Sets are unordered collections of unique elements.

**Key Characteristics:**
- Unordered collection
- Elements must be unique
- Elements must be immutable
- Mutable (the set itself can be changed)
- Fast membership testing

**Creating Sets:**
```python
empty_set = set()  # Cannot use {} for empty set
numbers = {1, 2, 3, 4, 5}
unique_letters = set("hello")  # {'h', 'e', 'l', 'o'}
```

**Set Operations:**
```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

union = set1 | set2          # {1, 2, 3, 4, 5, 6}
intersection = set1 & set2   # {3, 4}
difference = set1 - set2     # {1, 2}
symmetric_diff = set1 ^ set2 # {1, 2, 5, 6}
```

**Set Methods:**
```python
fruits = {"apple", "banana", "cherry"}
fruits.add("orange")     # Add single element
fruits.update(["mango", "grape"])  # Add multiple elements
fruits.remove("banana")  # Removes element (raises error if not found)
fruits.discard("kiwi")   # Removes if present (no error if not found)
```

**Common Uses:**
```python
# Remove duplicates from a list
unique_items = list(set([1, 2, 2, 3, 3, 3, 4]))

# Membership testing
valid_codes = {"A001", "B002", "C003"}
is_valid = "B002" in valid_codes  # True
```

## Functions

Functions are reusable blocks of code that perform specific tasks.

**Defining Functions:**
```python
def greet(name):
    """This function greets the person passed in as a parameter."""
    return f"Hello, {name}!"
```

**Parameters and Arguments:**
```python
# Required parameters
def add(a, b):
    return a + b

# Default parameters
def calculate_total(amount, tax_rate=0.1):
    return amount + (amount * tax_rate)

# Variable-length arguments
def sum_all(*args):
    return sum(args)

# Keyword arguments
def create_profile(**kwargs):
    return kwargs
```

**Function Calls:**
```python
# Basic call
result = add(5, 3)  # 8

# Using default parameter
total = calculate_total(100)  # 110

# Overriding default
total = calculate_total(100, 0.05)  # 105

# Variable-length arguments
total = sum_all(1, 2, 3, 4, 5)  # 15

# Keyword arguments
profile = create_profile(name="Alice", role="Analyst", team="Data Science")
```

**Return Values:**
```python
# Single return value
def square(x):
    return x * x

# Multiple return values
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers)/len(numbers)
    
# Unpacking multiple returns
minimum, maximum, average = get_stats([1, 2, 3, 4, 5])
```

**Scope:**
```python
# Global vs local variables
global_var = 10

def my_function():
    local_var = 20
    print(global_var)  # Can access global variable
    
    # To modify global variable
    global global_var
    global_var = 30
```

## Modules and Packages

Modules are Python files containing functions, classes, and variables. Packages are collections of modules.

**Importing Modules:**
```python
# Import entire module
import math
result = math.sqrt(16)  # 4.0

# Import specific components
from math import sqrt, pi
result = sqrt(16)  # 4.0

# Import with alias
import numpy as np
array = np.array([1, 2, 3])

# Import all (not recommended)
from math import *
```

**Creating Modules:**
```python
# File: my_module.py
def greet(name):
    return f"Hello, {name}!"

PI = 3.14159

# Using the module
import my_module
my_module.greet("Alice")
```

**Package Structure:**
```
my_package/
│
├── __init__.py
├── module1.py
└── module2.py
```

**Standard Library Modules:**
```python
import os           # Operating system interfaces
import sys          # System-specific parameters
import datetime     # Date and time handling
import random       # Random number generation
import json         # JSON encoding/decoding
import csv          # CSV file reading/writing
```

## File Handling

File handling allows reading from and writing to files.

**Opening Files:**
```python
# Basic file opening (remember to close)
file = open('data.txt', 'r')  # 'r' for read
content = file.read()
file.close()

# Recommended approach with context manager
with open('data.txt', 'r') as file:
    content = file.read()  # File closes automatically
```

**File Modes:**
- `'r'` - Read (default)
- `'w'` - Write (overwrites existing file)
- `'a'` - Append
- `'b'` - Binary mode
- `'t'` - Text mode (default)

**Reading Files:**
```python
# Read entire file
with open('data.txt', 'r') as file:
    content = file.read()

# Read line by line
with open('data.txt', 'r') as file:
    for line in file:
        print(line.strip())

# Read all lines into a list
with open('data.txt', 'r') as file:
    lines = file.readlines()
```

**Writing Files:**
```python
# Write to file (overwrites)
with open('output.txt', 'w') as file:
    file.write("Hello, world!\n")
    file.write("Another line.")

# Append to file
with open('output.txt', 'a') as file:
    file.write("\nAppended line.")
```

**Working with CSV Files:**
```python
import csv

# Reading CSV
with open('data.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# Writing CSV
data = [['Name', 'Age'], ['Alice', 30], ['Bob', 25]]
with open('output.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(data)
```

**Working with JSON Files:**
```python
import json

# Reading JSON
with open('data.json', 'r') as file:
    data = json.load(file)

# Writing JSON
data = {'name': 'Alice', 'age': 30}
with open('output.json', 'w') as file:
    json.dump(data, file, indent=4)
```

## Exception Handling

Exception handling allows graceful management of errors.

**Try-Except Structure:**
```python
try:
    # Code that might raise an exception
    result = 10 / 0
except ZeroDivisionError:
    # Handle specific exception
    result = 0
except (TypeError, ValueError) as e:
    # Handle multiple exceptions
    print(f"Error: {e}")
except:
    # Handle any other exception
    print("An error occurred")
else:
    # Runs if no exceptions
    print("Division successful")
finally:
    # Always runs
    print("End of calculation")
```

**Raising Exceptions:**
```python
def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b
```

**Creating Custom Exceptions:**
```python
class CustomError(Exception):
    """Custom exception class"""
    pass

def validate_age(age):
    if age < 0:
        raise CustomError("Age cannot be negative")
```

**Common Exceptions:**
- `SyntaxError`: Code syntax issue
- `TypeError`: Operation on inappropriate type
- `ValueError`: Operation on appropriate type but inappropriate value
- `IndexError`: Sequence index out of range
- `KeyError`: Dictionary key not found
- `FileNotFoundError`: Attempting to access nonexistent file
- `ZeroDivisionError`: Division by zero
- `ImportError`: Module not found

## List Comprehensions

List comprehensions provide a concise way to create lists.

**Basic Syntax:**
```python
# Format: [expression for item in iterable if condition]
```

**Simple Examples:**
```python
# Create a list of squares
squares = [x**2 for x in range(10)]  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Filter even numbers
evens = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]

# Transform strings
names = ["alice", "bob", "charlie"]
capitalized = [name.capitalize() for name in names]  # ["Alice", "Bob", "Charlie"]
```

**Nested List Comprehensions:**
```python
# Create a matrix
matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]
# [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
```

**Dictionary Comprehensions:**
```python
# Create a dictionary of squares
square_dict = {x: x**2 for x in range(5)}  # {0:0, 1:1, 2:4, 3:9, 4:16}

# Convert lists to dictionary
keys = ['a', 'b', 'c']
values = [1, 2, 3]
mapping = {k: v for k, v in zip(keys, values)}  # {'a': 1, 'b': 2, 'c': 3}
```

**Set Comprehensions:**
```python
# Create a set of squares
square_set = {x**2 for x in range(5)}  # {0, 1, 4, 9, 16}

# Extract unique characters
text = "hello"
unique_chars = {char for char in text}  # {'h', 'e', 'l', 'o'}
```

## Lambda Functions

Lambda functions are small, anonymous functions defined with the `lambda` keyword.

**Basic Syntax:**
```python
# lambda arguments: expression
```

**Simple Examples:**
```python
# Simple lambda function
square = lambda x: x**2
print(square(5))  # 25

# Multiple parameters
add = lambda x, y: x + y
print(add(3, 4))  # 7
```

**Use with Higher-Order Functions:**
```python
# With map
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))  # [1, 4, 9, 16, 25]

# With filter
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4]

# With sorted
data = [("Alice", 25), ("Bob", 30), ("Charlie", 20)]
sorted_by_age = sorted(data, key=lambda x: x[1])  # Sorts by age
```

**When to Use:**
- Simple operations
- Single-use functions
- Function arguments
- Key functions in sorting

## Object-Oriented Programming

Object-Oriented Programming (OOP) is a programming paradigm centered around objects.

**Classes and Objects:**
```python
# Define a class
class Person:
    # Class attribute
    species = "Homo sapiens"
    
    # Constructor
    def __init__(self, name, age):
        # Instance attributes
        self.name = name
        self.age = age
    
    # Method
    def greet(self):
        return f"Hello, my name is {self.name}"
    
    # String representation
    def __str__(self):
        return f"Person({self.name}, {self.age})"

# Create an object
person1 = Person("Alice", 30)
print(person1.name)         # Alice
print(person1.greet())      # Hello, my name is Alice
print(person1)              # Person(Alice, 30)
```

**Inheritance:**
```python
# Base class
class Employee:
    def __init__(self, name, employee_id):
        self.name = name
        self.employee_id = employee_id
    
    def display(self):
        return f"{self.name} (ID: {self.employee_id})"

# Derived class
class DataAnalyst(Employee):
    def __init__(self, name, employee_id, specialization):
        super().__init__(name, employee_id)
        self.specialization = specialization
    
    def display(self):
        basic_info = super().display()
        return f"{basic_info}, Specialization: {self.specialization}"

# Create objects
analyst = DataAnalyst("Jane", "A123", "Data Visualization")
print(analyst.display())
```

**Encapsulation:**
```python
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.__balance = balance  # Private attribute
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return True
        return False
    
    def get_balance(self):
        return self.__balance

account = BankAccount("Alice", 1000)
account.deposit(500)
print(account.get_balance())  # 1500
```

**Polymorphism:**
```python
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14159 * self.radius ** 2

# Polymorphic function
def print_area(shape):
    print(f"Area: {shape.area()}")

# Create objects
rect = Rectangle(5, 4)
circ = Circle(3)

# Same function works for different shapes
print_area(rect)  # Area: 20
print_area(circ)  # Area: 28.27431
```

# Part II: Python Libraries for Data Analysis

## NumPy

NumPy (Numerical Python) is the fundamental package for scientific computing in Python, providing support for arrays, matrices, and mathematical functions.

**Key Features:**
- Efficient multi-dimensional array object
- Element-wise operations
- Linear algebra operations
- Random number generation
- Array shape manipulation
- Statistical functions

**Creating Arrays:**
```python
import numpy as np

# From Python lists
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.array([[1, 2, 3], [4, 5, 6]])

# Special arrays
zeros = np.zeros((3, 3))            # 3x3 array of zeros
ones = np.ones((2, 4))              # 2x4 array of ones
identity = np.eye(3)                # 3x3 identity matrix
rng = np.arange(0, 10, 2)           # [0, 2, 4, 6, 8]
lin_space = np.linspace(0, 1, 5)    # 5 evenly spaced points between 0 and 1
```

**Array Attributes:**
```python
arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr.shape)      # (2, 3) - dimensions
print(arr.ndim)       # 2 - number of dimensions
print(arr.size)       # 6 - total number of elements
print(arr.dtype)      # int64 - data type
```

**Array Indexing and Slicing:**
```python
arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])

# Indexing
print(arr[0, 0])     # 1 - first row, first column
print(arr[1, 2])     # 7 - second row, third column

# Slicing
print(arr[0:2, 1:3])  # [[2, 3], [6, 7]] - first two rows, columns 1-2
print(arr[:, 1])      # [2, 6, 10] - all rows, second column
```

**Array Operations:**
```python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Arithmetic operations
print(a + b)         # [5, 7, 9] - element-wise addition
print(a - b)         # [-3, -3, -3] - element-wise subtraction
print(a * b)         # [4, 10, 18] - element-wise multiplication
print(a / b)         # [0.25, 0.4, 0.5] - element-wise division
print(a ** 2)        # [1, 4, 9] - element-wise square

# Matrix operations
c = np.array([[1, 2], [3, 4]])
d = np.array([[5, 6], [7, 8]])
print(np.dot(c, d))  # Matrix multiplication: [[19, 22], [43, 50]]
print(c.T)           # Transpose: [[1, 3], [2, 4]]
```

**Broadcasting:**
NumPy can automatically broadcast arrays of different shapes during arithmetic operations.
```python
a = np.array([[1, 2, 3], [4, 5, 6]])  # 2x3 array
b = np.array([10, 20, 30])            # 1D array

# Broadcasting b to each row of a
print(a + b)  # [[11, 22, 33], [14, 25, 36]]
```

**Array Manipulation:**
```python
arr = np.array([[1, 2], [3, 4]])

# Reshape
print(arr.reshape(1, 4))     # [[1, 2, 3, 4]]
print(arr.flatten())         # [1, 2, 3, 4]

# Stack arrays
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(np.vstack((a, b)))     # [[1, 2, 3], [4, 5, 6]]
print(np.hstack((a, b)))     # [1, 2, 3, 4, 5, 6]
print(np.column_stack((a, b)))  # [[1, 4], [2, 5], [3, 6]]

# Split arrays
arr = np.array([1, 2, 3, 4, 5, 6])
print(np.split(arr, 3))      # [array([1, 2]), array([3, 4]), array([5, 6])]
```

**Universal Functions (ufuncs):**
NumPy provides fast element-wise functions that operate on arrays.
```python
arr = np.array([1, 4, 9, 16, 25])

# Math functions
print(np.sqrt(arr))     # [1., 2., 3., 4., 5.]
print(np.exp(arr))      # Exponential
print(np.log(arr))      # Natural logarithm

# Trigonometric functions
angles = np.array([0, np.pi/4, np.pi/2])
print(np.sin(angles))   # [0., 0.7071, 1.]
print(np.cos(angles))   # [1., 0.7071, 0.]

# Statistical functions
data = np.array([1, 2, 3, 4, 5])
print(np.mean(data))    # 3.0
print(np.median(data))  # 3.0
print(np.std(data))     # Standard deviation
print(np.min(data))     # 1
print(np.max(data))     # 5
print(np.sum(data))     # 15
```

**Random Number Generation:**
```python
# Random samples
random_floats = np.random.random(5)               # 5 random floats in [0, 1)
random_ints = np.random.randint(1, 10, 5)         # 5 random integers in [1, 10)
normal_dist = np.random.normal(0, 1, 5)           # 5 samples from normal distribution

# Random sampling
data = np.array([10, 20, 30, 40, 50])
sample = np.random.choice(data, size=3)           # Random sample of 3 elements

# Setting seed for reproducibility
np.random.seed(42)
```

**Linear Algebra:**
```python
a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])

# Matrix multiplication
print(np.matmul(a, b))   # [[19, 22], [43, 50]]
print(a @ b)             # Same as matmul in Python 3.5+

# Matrix inverse
inv_a = np.linalg.inv(a)

# Determinant
det_a = np.linalg.det(a)

# Eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(a)

# Solving linear equations: Ax = b
b_vec = np.array([1, 2])
x = np.linalg.solve(a, b_vec)
```

## Pandas

Pandas is a powerful library for data manipulation and analysis, built on top of NumPy.

**Key Features:**
- DataFrame and Series data structures
- Data alignment and handling of missing data
- Powerful data reading/writing functionality
- Group operations for aggregation
- Time series functionality
- Flexible reshaping and pivoting

**Series:**
A Series is a one-dimensional labeled array that can hold any data type.

```python
import pandas as pd

# Creating a Series
s1 = pd.Series([1, 2, 3, 4, 5])
s2 = pd.Series([1, 2, 3, 4, 5], index=['a', 'b', 'c', 'd', 'e'])
s3 = pd.Series({'a': 1, 'b': 2, 'c': 3})

# Accessing elements
print(s2['a'])        # 1
print(s2[['a', 'c']])  # a    1, c    3
print(s2[0:2])        # a    1, b    2

# Operations
print(s2 + 5)         # Add 5 to each element
print(s2 > 2)         # Boolean mask: a=False, b=False, c=True, d=True, e=True
```

**DataFrame:**
A DataFrame is a two-dimensional labeled data structure with columns of potentially different types.

```python
# Creating a DataFrame
df1 = pd.DataFrame({
    'A': [1, 2, 3],
    'B': ['a', 'b', 'c'],
    'C': [4.0, 5.0, 6.0]
})

df2 = pd.DataFrame([
    [1, 'a', 4.0],
    [2, 'b', 5.0],
    [3, 'c', 6.0]
], columns=['A', 'B', 'C'])

# From NumPy array
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
df3 = pd.DataFrame(arr, columns=['X', 'Y', 'Z'])
```

**DataFrame Attributes and Methods:**
```python
df = pd.DataFrame({
    'A': [1, 2, 3],
    'B': [4, 5, 6],
    'C': [7, 8, 9]
})

print(df.shape)        # (3, 3) - rows, columns
print(df.dtypes)       # Data types of each column
print(df.columns)      # Index(['A', 'B', 'C'], dtype='object')
print(df.index)        # RangeIndex(start=0, stop=3, step=1)
print(df.values)       # NumPy array of values
print(df.describe())   # Statistical summary
print(df.info())       # Concise summary
```

**Accessing Data:**
```python
df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['New York', 'Boston', 'Chicago']
})

# Select columns
print(df['Name'])                  # Series with Name column
print(df[['Name', 'Age']])         # DataFrame with Name and Age columns

# Select rows by position
print(df.iloc[0])                  # First row
print(df.iloc[0:2])                # First two rows
print(df.iloc[0, 1])               # First row, second column (25)
print(df.iloc[[0, 2], [0, 2]])     # First and third rows, first and third columns

# Select rows by label
print(df.loc[0])                   # First row (same as iloc for default index)
print(df.loc[0, 'Age'])            # First row, Age column (25)

# Boolean indexing
print(df[df['Age'] > 30])          # Rows where Age > 30
print(df[(df['Age'] > 25) & (df['City'] == 'Chicago')])  # Combined conditions
```

**Data Cleaning:**
```python
# Handle missing values
df = pd.DataFrame({
    'A': [1, 2, np.nan, 4],
    'B': [5, np.nan, np.nan, 8],
    'C': [9, 10, 11, 12]
})

print(df.isnull())                 # Boolean mask of null values
print(df.isnull().sum())           # Count null values per column
print(df.dropna())                 # Drop rows with any null values
print(df.dropna(axis=1))           # Drop columns with any null values
print(df.fillna(0))                # Fill null values with 0
print(df['A'].fillna(df['A'].mean()))  # Fill nulls with column mean

# Remove duplicates
df = pd.DataFrame({
    'A': [1, 1, 2, 3],
    'B': ['a', 'a', 'b', 'c']
})

print(df.duplicated())             # Boolean mask of duplicate rows
print(df.drop_duplicates())        # Drop duplicate rows
print(df.drop_duplicates(['A']))   # Drop rows with duplicate A values
```

**Data Transformation:**
```python
df = pd.DataFrame({
    'A': [1, 2, 3, 4],
    'B': [5, 6, 7, 8]
})

# Apply functions
print(df['A'].apply(lambda x: x * 2))  # Double values in column A
print(df.apply(np.sum, axis=0))        # Sum each column
print(df.apply(np.sum, axis=1))        # Sum each row
print(df.applymap(lambda x: x * 2))    # Apply to each element

# Replace values
print(df.replace(1, 100))              # Replace 1 with 100
print(df.replace({1: 100, 2: 200}))    # Multiple replacements

# Map values
mapping = {1: 'one', 2: 'two', 3: 'three', 4: 'four'}
print(df['A'].map(mapping))            # Map values in column A
```

**Grouping and Aggregation:**
```python
df = pd.DataFrame({
    'Category': ['A', 'A', 'B', 'B', 'C'],
    'Value1': [10, 15, 20, 25, 30],
    'Value2': [100, 150, 200, 250, 300]
})

# Group by one column
grouped = df.groupby('Category')
print(grouped.sum())                     # Sum values in each group
print(grouped.mean())                    # Mean values in each group
print(grouped.agg(['sum', 'mean']))      # Multiple aggregations

# Group by multiple columns
df['SubCategory'] = [1, 2, 1, 2, 1]
multi_grouped = df.groupby(['Category', 'SubCategory'])
print(multi_grouped.sum())

# Aggregating different columns differently
print(grouped.agg({
    'Value1': 'sum',
    'Value2': ['sum', 'mean']
}))
```

**Merging, Joining, and Concatenating:**
```python
df1 = pd.DataFrame({
    'ID': [1, 2, 3, 4],
    'Name': ['Alice', 'Bob', 'Charlie', 'David']
})

df2 = pd.DataFrame({
    'ID': [1, 2, 3, 5],
    'Age': [25, 30, 35, 40]
})

# Merge (like SQL join)
print(pd.merge(df1, df2, on='ID'))                # Inner join
print(pd.merge(df1, df2, on='ID', how='left'))    # Left join
print(pd.merge(df1, df2, on='ID', how='right'))   # Right join
print(pd.merge(df1, df2, on='ID', how='outer'))   # Full outer join

# Concatenate
df3 = pd.DataFrame({
    'ID': [6, 7],
    'Name': ['Eve', 'Frank']
})

print(pd.concat([df1, df3]))                      # Vertically (row-wise)
print(pd.concat([df1, df2], axis=1))              # Horizontally (column-wise)

# Join
print(df1.join(df2.set_index('ID'), on='ID'))     # Join on index
```

**Time Series:**
```python
# Create time series
dates = pd.date_range('2023-01-01', periods=5, freq='D')
ts = pd.Series(np.random.randn(5), index=dates)

print(ts)                        # Series with date index
print(ts['2023-01-01'])          # Select by date
print(ts['2023-01-01':'2023-01-03'])  # Date range

# Resample
print(ts.resample('2D').sum())   # Sum every 2 days

# Time zone handling
ts_utc = ts.tz_localize('UTC')
ts_ny = ts_utc.tz_convert('America/New_York')

# Date/time components
print(ts.index.day)              # Day component of dates
print(ts.index.month)            # Month component
print(ts.index.year)             # Year component
```

**Reading and Writing Data:**
```python
# CSV
df = pd.read_csv('file.csv')
df.to_csv('output.csv', index=False)

# Excel
df = pd.read_excel('file.xlsx', sheet_name='Sheet1')
df.to_excel('output.xlsx', index=False)

# JSON
df = pd.read_json('file.json')
df.to_json('output.json')

# SQL
import sqlite3
conn = sqlite3.connect('database.db')
df = pd.read_sql('SELECT * FROM table', conn)
df.to_sql('table_name', conn, if_exists='replace')
```

## Data Visualization

### Matplotlib

Matplotlib is the foundation for data visualization in Python. It's a comprehensive library for creating static, animated, and interactive visualizations.

**Basic Plotting:**
```python
import matplotlib.pyplot as plt

# Line plot
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

plt.figure(figsize=(8, 4))  # Set figure size
plt.plot(x, y)
plt.title('Simple Line Plot')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.grid(True)
plt.show()
```

**Multiple Plots:**
```python
# Multiple lines
x = range(1, 6)
y1 = [i for i in x]
y2 = [i**2 for i in x]
y3 = [i**3 for i in x]

plt.figure(figsize=(10, 6))
plt.plot(x, y1, 'b-', label='Linear')  # Blue solid line
plt.plot(x, y2, 'r--', label='Square')  # Red dashed line
plt.plot(x, y3, 'g-.', label='Cubic')  # Green dash-dot line
plt.legend()
plt.title('Multiple Lines')
plt.show()
```

**Plot Types:**
```python
# Scatter plot
x = [5, 7, 8, 7, 2, 17, 2, 9, 4, 11, 12, 9, 6]
y = [99, 86, 87, 88, 111, 86, 103, 87, 94, 78, 77, 85, 86]

plt.figure(figsize=(8, 6))
plt.scatter(x, y)
plt.title('Scatter Plot')
plt.show()

# Bar chart
categories = ['A', 'B', 'C', 'D', 'E']
values = [25, 40, 30, 55, 15]

plt.figure(figsize=(8, 6))
plt.bar(categories, values)
plt.title('Bar Chart')
plt.show()

# Histogram
data = np.random.randn(1000)  # 1000 random numbers

plt.figure(figsize=(8, 6))
plt.hist(data, bins=30)
plt.title('Histogram')
plt.show()

# Pie chart
sizes = [15, 30, 45, 10]
labels = ['Group A', 'Group B', 'Group C', 'Group D']

plt.figure(figsize=(8, 6))
plt.pie(sizes, labels=labels, autopct='%1.1f%%')
plt.title('Pie Chart')
plt.show()
```

**Subplots:**
```python
# Multiple plots in a grid
plt.figure(figsize=(12, 8))

# 2x2 grid
plt.subplot(2, 2, 1)  # (rows, columns, panel number)
plt.plot(x, y1)
plt.title('Plot 1')

plt.subplot(2, 2, 2)
plt.scatter(x, y2)
plt.title('Plot 2')

plt.subplot(2, 2, 3)
plt.bar(categories, values)
plt.title('Plot 3')

plt.subplot(2, 2, 4)
plt.hist(data, bins=20)
plt.title('Plot 4')

plt.tight_layout()  # Adjust spacing
plt.show()
```

**Customization:**
```python
# Styling a plot
plt.figure(figsize=(10, 6))
plt.plot(x, y, 'r-o', linewidth=2, markersize=8)
plt.title('Customized Plot', fontsize=16, fontweight='bold')
plt.xlabel('X-axis', fontsize=12)
plt.ylabel('Y-axis', fontsize=12)
plt.grid(True, linestyle='--', alpha=0.7)
plt.axhline(y=5, color='k', linestyle='--', alpha=0.3)  # Horizontal line
plt.axvline(x=3, color='k', linestyle='--', alpha=0.3)  # Vertical line
plt.show()

# Changing plot style
plt.style.use('seaborn-darkgrid')
```

**Saving Plots:**
```python
plt.figure(figsize=(10, 6))
plt.plot(x, y)
plt.title('Saved Plot')
plt.savefig('plot.png', dpi=300, bbox_inches='tight')
plt.close()  # Close the figure to free memory
```

### Seaborn

Seaborn is a statistical data visualization library based on matplotlib, providing a high-level interface for drawing attractive statistical graphics.

**Basic Plots:**
```python
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# Set the style
sns.set(style="whitegrid")

# Sample data
tips = sns.load_dataset("tips")
flights = sns.load_dataset("flights")
iris = sns.load_dataset("iris")
```

**Distribution Plots:**
```python
# Histogram
plt.figure(figsize=(8, 6))
sns.histplot(tips['total_bill'], kde=True, bins=20)
plt.title('Histogram with KDE')
plt.show()

# Kernel Density Estimate
plt.figure(figsize=(8, 6))
sns.kdeplot(data=tips, x='total_bill', hue='sex', fill=True)
plt.title('KDE Plot by Gender')
plt.show()

# Box Plot
plt.figure(figsize=(10, 6))
sns.boxplot(x='day', y='total_bill', data=tips)
plt.title('Box Plot')
plt.show()

# Violin Plot
plt.figure(figsize=(10, 6))
sns.violinplot(x='day', y='total_bill', data=tips, hue='sex', split=True)
plt.title('Violin Plot')
plt.show()
```

**Categorical Plots:**
```python
# Bar Plot
plt.figure(figsize=(10, 6))
sns.barplot(x='day', y='total_bill', data=tips, hue='sex')
plt.title('Bar Plot')
plt.show()

# Count Plot
plt.figure(figsize=(10, 6))
sns.countplot(x='day', data=tips, hue='sex')
plt.title('Count Plot')
plt.show()

# Point Plot
plt.figure(figsize=(10, 6))
sns.pointplot(x='day', y='tip', data=tips, hue='sex')
plt.title('Point Plot')
plt.show()

# Strip Plot
plt.figure(figsize=(10, 6))
sns.stripplot(x='day', y='total_bill', data=tips, jitter=True)
plt.title('Strip Plot')
plt.show()

# Swarm Plot
plt.figure(figsize=(10, 6))
sns.swarmplot(x='day', y='total_bill', data=tips)
plt.title('Swarm Plot')
plt.show()
```

**Relational Plots:**
```python
# Scatter Plot
plt.figure(figsize=(8, 6))
sns.scatterplot(x='total_bill', y='tip', data=tips, hue='sex', size='size')
plt.title('Scatter Plot')
plt.show()

# Line Plot
# First, create time series data
flights_pivoted = flights.pivot('month', 'year', 'passengers')
plt.figure(figsize=(12, 6))
sns.lineplot(data=flights_pivoted)
plt.title('Line Plot')
plt.show()

# Regression Plot
plt.figure(figsize=(8, 6))
sns.regplot(x='total_bill', y='tip', data=tips)
plt.title('Regression Plot')
plt.show()
```

**Matrix Plots:**
```python
# Heatmap
corr_matrix = tips.corr()
plt.figure(figsize=(8, 6))
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm')
plt.title('Correlation Heatmap')
plt.show()

# Cluster Map
plt.figure(figsize=(10, 8))
sns.clustermap(corr_matrix, cmap='coolwarm', standard_scale=1)
plt.title('Cluster Map')
plt.show()
```

**Multi-plot Grids:**
```python
# Pair Plot
plt.figure(figsize=(10, 8))
sns.pairplot(iris, hue='species')
plt.suptitle('Pair Plot', y=1.02)
plt.show()

# Joint Plot
plt.figure(figsize=(8, 6))
sns.jointplot(x='total_bill', y='tip', data=tips, kind='reg')
plt.suptitle('Joint Plot', y=1.02)
plt.show()

# FacetGrid
g = sns.FacetGrid(tips, col="sex", row="smoker", height=4)
g.map_dataframe(sns.scatterplot, x="total_bill", y="tip")
g.add_legend()
plt.show()
```

**Styling and Customization:**
```python
# Themes
sns.set_theme(style="darkgrid")

# Color palettes
sns.set_palette("Set1")

# Custom plot
plt.figure(figsize=(10, 6))
sns.barplot(x='day', y='total_bill', data=tips, 
            palette="viridis", hue='sex', 
            errorbar=('ci', 95))
plt.title('Customized Bar Plot', fontsize=16)
plt.xlabel('Day of the Week', fontsize=12)
plt.ylabel('Total Bill ($)', fontsize=12)
plt.legend(title='Gender')
plt.tight_layout()
plt.show()
```

## Statistical Analysis

Python offers several libraries for statistical analysis, with SciPy and StatsModels being the most prominent.

**Descriptive Statistics:**
```python
import numpy as np
import pandas as pd
from scipy import stats

# Sample data
data = np.array([5, 10, 15, 20, 25, 30, 35, 40, 45, 50])

# Central tendency
mean = np.mean(data)         # 27.5
median = np.median(data)     # 27.5
mode = stats.mode(data)      # ModeResult(mode=5.0, count=1)

# Dispersion
variance = np.var(data)      # 212.5
std_dev = np.std(data)       # 14.58
min_val = np.min(data)       # 5
max_val = np.max(data)       # 50
range_val = max_val - min_val  # 45

# Percentiles
q1 = np.percentile(data, 25)  # 13.75
q3 = np.percentile(data, 75)  # 41.25
iqr = q3 - q1                 # 27.5

# Using pandas
df = pd.DataFrame({'values': data})
print(df.describe())
```

**Probability Distributions:**
```python
from scipy import stats
import matplotlib.pyplot as plt
import numpy as np

# Normal distribution
x = np.linspace(-5, 5, 100)
pdf = stats.norm.pdf(x)

plt.figure(figsize=(8, 6))
plt.plot(x, pdf)
plt.title('Normal Distribution PDF')
plt.show()

# Generate random samples from a distribution
normal_samples = np.random.normal(loc=0, scale=1, size=1000)

plt.figure(figsize=(8, 6))
plt.hist(normal_samples, bins=30, density=True)
plt.plot(x, pdf, 'r-')
plt.title('Histogram of Normal Samples with PDF')
plt.show()

# Other distributions
x = np.linspace(0, 5, 100)
plt.figure(figsize=(12, 8))

plt.subplot(2, 2, 1)
plt.plot(x, stats.uniform.pdf(x, loc=0, scale=1))
plt.title('Uniform Distribution')

plt.subplot(2, 2, 2)
plt.plot(x, stats.expon.pdf(x, scale=1))
plt.title('Exponential Distribution')

plt.subplot(2, 2, 3)
plt.plot(x, stats.gamma.pdf(x, a=2, scale=1))
plt.title('Gamma Distribution')

plt.subplot(2, 2, 4)
plt.plot(x, stats.chi2.pdf(x, df=3))
plt.title('Chi-Square Distribution')

plt.tight_layout()
plt.show()
```

**Hypothesis Testing:**
```python
from scipy import stats
import numpy as np

# Sample data
group1 = np.array([5, 7, 8, 6, 9, 8, 7, 10])
group2 = np.array([3, 5, 4, 6, 5, 4, 7, 6])

# One-sample t-test
# Test if group1 has a mean different from 7
t_stat, p_val = stats.ttest_1samp(group1, 7)
print(f"One-sample t-test: t={t_stat:.3f}, p={p_val:.3f}")
print(f"Conclusion: Mean is {'different from' if p_val < 0.05 else 'not different from'} 7")

# Two-sample t-test
# Test if group1 and group2 have different means
t_stat, p_val = stats.ttest_ind(group1, group2)
print(f"Two-sample t-test: t={t_stat:.3f}, p={p_val:.3f}")
print(f"Conclusion: Means are {'different' if p_val < 0.05 else 'not different'}")

# Paired t-test
# Test if paired differences have mean 0
before = np.array([120, 115, 130, 140, 125])
after = np.array([115, 110, 125, 130, 120])
t_stat, p_val = stats.ttest_rel(before, after)
print(f"Paired t-test: t={t_stat:.3f}, p={p_val:.3f}")
print(f"Conclusion: Paired difference is {'significant' if p_val < 0.05 else 'not significant'}")

# ANOVA
# Test if multiple groups have the same mean
group_a = np.array([5, 6, 7, 5, 8])
group_b = np.array([6, 7, 8, 9, 7])
group_c = np.array([8, 9, 10, 9, 8])
f_stat, p_val = stats.f_oneway(group_a, group_b, group_c)
print(f"ANOVA: F={f_stat:.3f}, p={p_val:.3f}")
print(f"Conclusion: Groups have {'different' if p_val < 0.05 else 'the same'} means")

# Chi-square test of independence
# Test if two categorical variables are related
observed = np.array([[30, 20], [15, 35]])  # Contingency table
chi2, p, dof, expected = stats.chi2_contingency(observed)
print(f"Chi-square test: chi2={chi2:.3f}, p={p:.3f}")
print(f"Conclusion: Variables are {'dependent' if p < 0.05 else 'independent'}")
```

**Correlation and Regression:**
```python
import numpy as np
import pandas as pd
from scipy import stats
import matplotlib.pyplot as plt
import statsmodels.api as sm

# Sample data
x = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
y = np.array([2, 4, 5, 4, 5, 7, 9, 8, 10, 12])

# Pearson correlation coefficient
r, p_value = stats.pearsonr(x, y)
print(f"Pearson correlation: r={r:.3f}, p={p_value:.3f}")

# Spearman rank correlation
rho, p_value = stats.spearmanr(x, y)
print(f"Spearman correlation: rho={rho:.3f}, p={p_value:.3f}")

# Simple linear regression with statsmodels
X = sm.add_constant(x)  # Add intercept term
model = sm.OLS(y, X).fit()
print(model.summary())

# Make predictions
pred_y = model.predict(X)

# Plot regression line
plt.figure(figsize=(10, 6))
plt.scatter(x, y, label='Data')
plt.plot(x, pred_y, 'r-', label='Regression Line')
plt.title(f'Linear Regression (y = {model.params[1]:.2f}x + {model.params[0]:.2f})')
plt.xlabel('X')
plt.ylabel('Y')
plt.legend()
plt.grid(True)
plt.show()

# Multiple linear regression
x1 = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
x2 = np.array([5, 4, 6, 3, 7, 8, 5, 9, 7, 10])
y = np.array([10, 12, 14, 16, 18, 20, 22, 24, 26, 28])

X = np.column_stack((x1, x2))
X = sm.add_constant(X)  # Add intercept
model = sm.OLS(y, X).fit()
print(model.summary())
```

## Machine Learning Integration

Python's data analysis tools integrate seamlessly with machine learning libraries, particularly scikit-learn.

**Data Preparation:**
```python
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline

# Sample data
df = pd.DataFrame({
    'age': [25, 30, 35, 40, 45, 50, 55, 60],
    'income': [50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000],
    'gender': ['M', 'F', 'F', 'M', 'M', 'F', 'M', 'F'],
    'purchased': [0, 0, 1, 1, 1, 0, 1, 1]
})

# Split features and target
X = df.drop('purchased', axis=1)
y = df['purchased']

# Identify numeric and categorical columns
numeric_features = ['age', 'income']
categorical_features = ['gender']

# Create preprocessing steps for numeric and categorical data
numeric_transformer = StandardScaler()
categorical_transformer = OneHotEncoder(drop='first')

# Combine preprocessing steps
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numeric_features),
        ('cat', categorical_transformer, categorical_features)
    ])

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Apply preprocessing
X_train_processed = preprocessor.fit_transform(X_train)
X_test_processed = preprocessor.transform(X_test)

print(f"Processed training data shape: {X_train_processed.shape}")
```

**Classification:**
```python
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# Logistic Regression
log_reg = LogisticRegression(random_state=42)
log_reg.fit(X_train_processed, y_train)
y_pred_log = log_reg.predict(X_test_processed)
print("Logistic Regression Accuracy:", accuracy_score(y_test, y_pred_log))

# Decision Tree
tree = DecisionTreeClassifier(random_state=42)
tree.fit(X_train_processed, y_train)
y_pred_tree = tree.predict(X_test_processed)
print("Decision Tree Accuracy:", accuracy_score(y_test, y_pred_tree))

# Random Forest
forest = RandomForestClassifier(random_state=42)
forest.fit(X_train_processed, y_train)
y_pred_forest = forest.predict(X_test_processed)
print("Random Forest Accuracy:", accuracy_score(y_test, y_pred_forest))