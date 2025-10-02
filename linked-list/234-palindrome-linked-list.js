/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // find the middle of linked list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half of list
  let prev = null;
  let curr = slow;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // check for palindrome
  let firstList = head;
  let secondList = prev;

  while (firstList !== slow) {
    if (firstList.val !== secondList.val) {
      return false;
    }

    firstList = firstList.next;
    secondList = secondList.next;
  }

  return true
};

// Time complexity - O(n)
// Space complexity - O(1)