/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let curr = head;
  const seenNodes = new Set();
  while (curr) {
    if (seenNodes.has(curr)) {
      return true;
    }

    seenNodes.add(curr);
    curr = curr.next;
  }
  return false;
};
// Time complexity - O(n)
// Space complexity - O(1)

var hasCycle = function (head) {
  if (head === null) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};
// Time complexity - O(1)
// Space complexity - O(1)
