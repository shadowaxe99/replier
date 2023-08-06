```python
import psycopg2
from psycopg2 import OperationalError

def create_connection():
    conn = None
    try:
        conn = psycopg2.connect(
            database="your_database",
            user="your_username",
            password="your_password",
            host="localhost",
            port="5432",
        )
        print("Connection to PostgreSQL DB successful")
    except OperationalError as e:
        print(f"The error '{e}' occurred")
    return conn

def execute_query(connection, query):
    connection.autocommit = True
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        print("Query executed successfully")
    except OperationalError as e:
        print(f"The error '{e}' occurred")

def connectDatabase():
    connection = create_connection()
    user_table = """
    CREATE TABLE IF NOT EXISTS UserSchema (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL, 
      password TEXT NOT NULL
    )
    """
    email_table = """
    CREATE TABLE IF NOT EXISTS EmailSchema (
      id SERIAL PRIMARY KEY,
      sender TEXT NOT NULL, 
      content TEXT NOT NULL,
      category TEXT NOT NULL
    )
    """
    template_table = """
    CREATE TABLE IF NOT EXISTS TemplateSchema (
      id SERIAL PRIMARY KEY,
      template_name TEXT NOT NULL, 
      template_content TEXT NOT NULL
    )
    """
    execute_query(connection, user_table)
    execute_query(connection, email_table)
    execute_query(connection, template_table)
```