#include <iostream>
#include <vector>
#include <numeric> // for std::gcd
#include <algorithm> // for std::max

using namespace std;

// Helper function to compute LCM
long long gcd(long long a, long long b) {
    while (b != 0) {
        long long temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
long long lcm(long long a, long long b) {
    return (a / gcd(a, b)) * b;
}

int longestProductEquivalentSubarray(vector<int>& nums) {
    int n = nums.size();
    int maxLength = 0;

    // Traverse through all possible subarrays
    for (int i = 0; i < n; ++i) {
        long long prod = 1;       // Initialize product
        long long gcdValue = nums[i]; // Initialize GCD with the first element of the subarray
        long long lcmValue = nums[i]; // Initialize LCM with the first element of the subarray

        for (int j = i; j < n; ++j) {
            // Update product
            prod *= nums[j];

            // Update GCD
            gcdValue = gcd(gcdValue, nums[j]);

            // Update LCM
            lcmValue = lcm(lcmValue, nums[j]);

            // Check product equivalence
            if (prod == gcdValue * lcmValue) {
                maxLength = max(maxLength, j - i + 1);
            }
        }
    }

    return maxLength;
}

int main() {
    vector<int> nums1 = {1,2,1,2,1,1,1}; // Example 1
    cout << "Longest Product Equivalent Subarray Length: " << longestProductEquivalentSubarray(nums1) << endl;

    vector<int> nums2 = {2,3,4,5,6}; // Example 2
    cout << "Longest Product Equivalent Subarray Length: " << longestProductEquivalentSubarray(nums2) << endl;

    return 0;
}
