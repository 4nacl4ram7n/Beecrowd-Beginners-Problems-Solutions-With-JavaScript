#include <stdio.h>
#include <iostream>
#include <iomanip>

int main()
{
     double R, A, PI;
     PI = 3.14159;
     std::cin >> R;
     A = PI * R * R;
     std::cout << "A=" << std::fixed << std::setprecision(4) << A << std::endl;
     return 0;
 }
