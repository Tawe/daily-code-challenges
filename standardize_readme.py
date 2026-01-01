#!/usr/bin/env python3
import os
import re
import glob

def standardize_readme(file_path):
    """Standardize a single README.md file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract date from file path
    date_match = re.search(r'(\d{4}-\d{2}-\d{2})', file_path)
    date = date_match.group(1) if date_match else ''
    
    # Extract sections
    sections = {}
    
    # Extract title/link section
    link_pattern = r'#\s*' + re.escape(date) + r'\s*\n\s*\[.*?\]\(.*?\)'
    link_match = re.search(link_pattern, content)
    if link_match:
        sections['header'] = f"# {date}\n[{date} Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/{date})"
    
    # Extract Instructions section
    inst_pattern = r'##\s*Instructions\s*\n(.*?)(?=##\s*(?:My Thoughts|What I Learned)|\Z)'
    inst_match = re.search(inst_pattern, content, re.DOTALL | re.IGNORECASE)
    if inst_match:
        inst_content = inst_match.group(1).strip()
        # Clean up instructions
        inst_content = re.sub(r'^[.\s]*Instructions[.\s]*', '', inst_content, flags=re.MULTILINE)
        inst_content = re.sub(r'^\*\*[^*]*\*\*\s*\n', '', inst_content)  # Remove bold headings
        inst_content = re.sub(r'^[.\s]+', '', inst_content, flags=re.MULTILINE)  # Remove leading dots/spaces
        inst_content = re.sub(r'\s{2,}', ' ', inst_content)  # Replace multiple spaces with single
        inst_content = re.sub(r'\n{3,}', '\n\n', inst_content)  # Replace 3+ newlines with 2
        sections['instructions'] = inst_content
    
    # Extract My Thoughts section
    thoughts_pattern = r'##\s*My Thoughts\s*\n(.*?)(?=##\s*(?:What I Learned)|\Z)'
    thoughts_match = re.search(thoughts_pattern, content, re.DOTALL | re.IGNORECASE)
    if thoughts_match:
        thoughts_content = thoughts_match.group(1).strip()
        thoughts_content = re.sub(r'\s{2,}', ' ', thoughts_content)
        thoughts_content = re.sub(r'\n{3,}', '\n\n', thoughts_content)
        sections['thoughts'] = thoughts_content
    
    # Extract What I Learned section
    learned_pattern = r'##\s*What I Learned\s*\n(.*?)(?=\Z)'
    learned_match = re.search(learned_pattern, content, re.DOTALL | re.IGNORECASE)
    if learned_match:
        learned_content = learned_match.group(1).strip()
        # Convert bullet points to proper markdown format
        learned_content = re.sub(r'^\s*[•·]\s*', '- ', learned_content, flags=re.MULTILINE)
        learned_content = re.sub(r'^\s*-\s{2,}', '- ', learned_content, flags=re.MULTILINE)  # Fix spacing
        learned_content = re.sub(r'^\s*\d+\.\s*', '- ', learned_content, flags=re.MULTILINE)  # Convert numbers to bullets
        learned_content = re.sub(r'\s{2,}', ' ', learned_content)
        learned_content = re.sub(r'\n{3,}', '\n\n', learned_content)
        # Remove trailing spaces from each line
        lines = learned_content.split('\n')
        lines = [line.rstrip() for line in lines]
        learned_content = '\n'.join(lines)
        sections['learned'] = learned_content
    
    # Build standardized content
    if sections:
        new_content = f"{sections.get('header', '')}\n\n"
        new_content += "## Instructions\n\n"
        new_content += sections.get('instructions', '') + "\n\n"
        new_content += "## My Thoughts\n\n"
        new_content += sections.get('thoughts', '') + "\n\n"
        new_content += "## What I Learned\n\n"
        new_content += sections.get('learned', '') + "\n"
        
        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Standardized: {file_path}")
        return True
    else:
        print(f"Could not parse sections in: {file_path}")
        return False

def main():
    # Find all README.md files in freecodecamp directory
    readme_files = glob.glob('/Users/johnmunn/Documents/projects/daily-code-challenges/freecodecamp/**/README.md', recursive=True)
    
    # Sort by date for consistent processing
    readme_files.sort()
    
    processed = 0
    for readme_file in readme_files:
        if standardize_readme(readme_file):
            processed += 1
    
    print(f"\nProcessed {processed} files.")

if __name__ == "__main__":
    main()