/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  // Without dummy node
  let curr = null;

  if (list1.val < list2.val) {
    curr = list1;
    list1 = list1.next;
  } else {
    curr = list2;
    list2 = list2.next;
  }

  let start = curr;

  while (list1 && list2) {
    if (list2.val < list1.val) {
      curr.next = list2;
      list2 = list2.next;
    } else {
      curr.next = list1;
      list1 = list1.next;
    }
    curr = curr.next;
  }

  if (list1) {
    curr.next = list1;
  }

  if (list2) {
    curr.next = list2;
  }

  return start;
};

var mergeTwoLists = function (list1, list2) {
  // With dummy node
  let dummy = new ListNode();
  let curr = dummy;

  while (list1 && list2) {
    if (list2.val < list1.val) {
      curr.next = list2;
      list2 = list2.next;
    } else {
      curr.next = list1;
      list1 = list1.next;
    }
    curr = curr.next;
  }

  if (list1) {
    curr.next = list1;
  }

  if (list2) {
    curr.next = list2;
  }

  return dummy.next;
};
// m - length of first LL, n = length of second LL
// Time complexity - O(m + n)
// Space complexity - O(1)
