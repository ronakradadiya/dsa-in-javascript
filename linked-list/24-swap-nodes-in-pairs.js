/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let sentinel = new ListNode();
  sentinel.next = head;

  let prev = sentinel;
  let curr = sentinel.next;

  while (curr && curr.next) {
    prev.next = curr.next;
    prev = prev.next;
    curr.next = prev.next;
    prev.next = curr;
    prev = curr;
    curr = curr.next;
  }

  return sentinel.next;
};

// Time complexity - O(n)
// Space complexity - O(1)
