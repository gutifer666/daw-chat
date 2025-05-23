import os
import re

def find_html_files(root_dir):
    """Find all HTML files in the given directory and its subdirectories."""
    html_files = []
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith('.html'):
                html_files.append(os.path.join(dirpath, filename))
    return html_files

def remove_header(file_path):
    """Remove the header section from the HTML file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Define the pattern to match the header section
    header_pattern = re.compile(r'<header>.*?</header>', re.DOTALL)
    
    # Check if the file contains the header
    if header_pattern.search(content):
        # Remove the header
        new_content = header_pattern.sub('', content)
        
        # Write the modified content back to the file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
    
    return False

def main():
    root_dir = os.path.dirname(os.path.abspath(__file__))
    html_files = find_html_files(root_dir)
    
    modified_files = 0
    for file_path in html_files:
        if remove_header(file_path):
            modified_files += 1
            print(f"Removed header from {file_path}")
    
    print(f"\nTotal HTML files processed: {len(html_files)}")
    print(f"Files modified: {modified_files}")

if __name__ == "__main__":
    main()