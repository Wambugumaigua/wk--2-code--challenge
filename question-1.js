ef swap_case(input_string):
    swapped_string = ''
    for char in input_string:
        if char.islower():
            swapped_string += char.upper()
        elif char.isupper():
            swapped_string += char.lower()
        else:
            swapped_string += char
    return swapped_string

# Test the function
input_string = 'The Quick Brown Fox'
output_string = swap_case(input_string)
print(output_string)  # Output: 'tHE qUICK bROWN fOX'