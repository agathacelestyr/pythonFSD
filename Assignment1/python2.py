def chech_valid(s):
    result = 1
    if (len(s) > 0 and len(s) < 2):
        result = 0
        return result
    if len(s) % 2 != 0:
        result = 0
        return result
    for i in range(len(s)):
        if s[i] == '{':
           if s[i+1]!= None and s[i+1] == '}':
               i=i+1
           else:
               result = 0
               break
        elif s[i] == '(':
            if s[i+1]!= None and s[i+1] == ')':
                i = i+1
            else:
                result = 0
                break
        elif s[i] == '[':
            if s[i+1]!= None and s[i+1] == ']':
                i = i+1
            else:
                result = 0
                break
    return result


str = "{}()[]"
s = list(str)
if chech_valid(s):
    print("the string is valid")
else:
    print("the string is invalid")