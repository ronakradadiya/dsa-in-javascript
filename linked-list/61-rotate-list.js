/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) {
    return head;
  }

  // length of linked list
  let size = 0;
  let curr = head;

  while (curr) {
    size += 1;
    curr = curr.next;
  }

  k = k % size;

  let slow = head;
  let fast = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  fast.next = head;
  let newHead = slow.next;
  slow.next = null;

  return newHead;
};

// Time complexity - O(n)
// Space complexity - O(1)
