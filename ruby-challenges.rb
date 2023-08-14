# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# write a method with number as a parameter
# write a conditional statement with the even? function to determine boolean value and return a string with interpolation.
# print values

def even_or_odd number
    if number.even?
      "#{number} is even"
    else
      "#{number} is odd"
    end
end

p even_or_odd(reposts1)
p even_or_odd(reposts2)
p even_or_odd(reposts3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# create a method and use str as a parameter and arguement
# use .delete to call on str and list all vowels in uppercase and lowercase, removes the letters from the string


def remove_vowels str
    str.delete("aeiouAEIOU")
end

  p remove_vowels(beatles_album1)
  p remove_vowels(beatles_album2)
  p remove_vowels(beatles_album3)
# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# create a method and use str as a parameter
# convert all letter to lowercase using .downcase and use .reverse to reverse the string
# write a conditional statement and return strings with interpolation
# if the downcase string equals to the downcase string in reverse, return that its a palindrome, if not, return that the string is not a palindrome.

def is_palindrome str
    if str.downcase == str.downcase.reverse
        "#{str} is a palindrome"
    else
        "#{str} is not a palindrome"
    end
end

p is_palindrome(palindrome_test_case1)
p is_palindrome(palindrome_test_case2)
p is_palindrome(palindrome_test_case3)