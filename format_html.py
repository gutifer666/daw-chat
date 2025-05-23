#!/usr/bin/env python3
import os
import re
from bs4 import BeautifulSoup

def format_html_file(file_path):
    print(f"Formatting {file_path}")
    
    # Read the file
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as file:
        content = file.read()
    
    # Fix invalid HTML comments
    content = content.replace('<--', '<!--')
    
    # Parse the HTML
    soup = BeautifulSoup(content, 'html.parser')
    
    # Add DOCTYPE if missing
    if not content.strip().startswith('<!DOCTYPE'):
        doctype = '<!DOCTYPE html>\n'
        content = doctype + str(soup)
    
    # Fix body tag with excessive classes
    if soup.body and 'class' in soup.body.attrs:
        classes = soup.body['class']
        # Remove duplicate classes
        unique_classes = list(dict.fromkeys(classes))
        soup.body['class'] = unique_classes
    
    # Format the HTML with proper indentation
    formatted_html = soup.prettify()
    
    # Write the formatted HTML back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(formatted_html)
    
    return True

def find_html_files(directory):
    html_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))
    return html_files

def main():
    # Get all HTML files in the current directory and subdirectories
    html_files = find_html_files('.')
    print(f"Found {len(html_files)} HTML files")
    
    # Format each HTML file
    formatted_count = 0
    for file_path in html_files:
        try:
            if format_html_file(file_path):
                formatted_count += 1
        except Exception as e:
            print(f"Error formatting {file_path}: {e}")
    
    print(f"Successfully formatted {formatted_count} out of {len(html_files)} HTML files")

if __name__ == "__main__":
    main()