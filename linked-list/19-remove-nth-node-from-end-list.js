/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;

  // Calculate length of linked list
  let lengthOfLinkedList = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    lengthOfLinkedList += 1;
  }

  // Remove Node
  let prev = sentinel;
  for (let i = 0; i < lengthOfLinkedList - n; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;

  return sentinel.next;
};
// Two pass algo
// Time complexity - O(n) + O(n) = O(n)
// Space complexity - O(1)

var removeNthFromEndAlt = function (head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let first = sentinel;
  let second = sentinel;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  while (first && first.next) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return sentinel.next;
};
// One pass algo
// Time complexity - O(n)
// Space complexity - O(1)
