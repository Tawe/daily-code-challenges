unless defined?(ListNode)
  class ListNode
    attr_accessor :val, :next

    def initialize(val = 0, _next = nil)
      @val = val
      @next = _next
    end
  end
end

def rotate_right(head, k)
  return head if head.nil? || head.next.nil?

  len = 1
  tail = head
  while tail.next
    tail = tail.next
    len += 1
  end

  k %= len
  return head if k == 0

  tail.next = head

  new_tail = head
  (len - k - 1).times { new_tail = new_tail.next }

  new_head = new_tail.next
  new_tail.next = nil
  new_head
end

def array_to_list(arr)
  return nil if arr.empty?

  head = ListNode.new(arr[0])
  cur = head
  arr[1..].each do |v|
    cur.next = ListNode.new(v)
    cur = cur.next
  end
  head
end

def list_to_array(head)
  out = []
  cur = head
  while cur
    out << cur.val
    cur = cur.next
  end
  out
end

if __FILE__ == $PROGRAM_NAME
  puts list_to_array(rotate_right(array_to_list([1, 2, 3, 4, 5]), 2)).inspect # [4,5,1,2,3]
  puts list_to_array(rotate_right(array_to_list([0, 1, 2]), 4)).inspect       # [2,0,1]
end