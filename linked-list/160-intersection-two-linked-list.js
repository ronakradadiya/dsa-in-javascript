/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  const nodeBSet = new Set();

  while (headA !== null) {
    nodeBSet.add(headA);
    headA = headA.next;
  }

  while (headB !== null) {
    if (nodeBSet.has(headB)) {
      return headB
    }
    headB = headB.next
  }

  return null
};