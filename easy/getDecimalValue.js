/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {number}
 */

const getDecimalValue = function(head) {
  let val = 0;
  while (head) {
    val = 2 * val + head.val;
    head = head.next;
  }
  return val;
};
