/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let ans = new ListNode();
  let ansHead = ans;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;

    const newNode = new ListNode(digit);
    ans.next = newNode;
    ans = ans.next;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return ansHead.next;
};

// m - length of first LL, n = length of second LL
// Time complexity - O(m + n)
// Space complexity - O(1)
