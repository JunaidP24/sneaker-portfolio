class Solution:
    def evalRPN(tokens) -> int:
        nums = []
        res = 0
        for token in tokens:
            if token in ['+','-','*','/']:
                num1,num2 = int(nums.pop()), int(nums.pop())
                if token == '+':
                    res += (num1 + num2)
                elif token == '-':
                    res += (num2 - num1)
                elif token == '*':
                    res += (num1 * num2)
                else:
                    res += (num2 / num1)
            else:
                nums.append(token)
        return res
            
tokens = ["2","1","+","3","*"]

monkey = Solution
monkey.evalRPN(tokens)