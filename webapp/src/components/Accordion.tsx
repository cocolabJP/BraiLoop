import { createContext, useContext, useEffect, useRef, useState } from 'react';

interface AccordionState {
  [groupId: string]: string | null
}

interface AccordionContext {
  state: AccordionState
  setOpenItem: (groupId: string, itemId: string | null) => void
}

const AccordionContext = createContext<AccordionContext | undefined>(undefined); 
const GroupContext = createContext<string | undefined>(undefined);
const ItemContext = createContext<string | undefined>(undefined);

export function AccordionProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [state, setState] = useState<AccordionState>({});

  const setOpenItem = (groupId: string, itemId: string | null) => {
    setState((prev) => ({ ...prev, [groupId]: itemId }));
  };

  return (
    <AccordionContext.Provider value={{ state, setOpenItem }}>
      {children}
    </AccordionContext.Provider>
  )
}

export function Accordion({
  groupId,
  children,
}: {
  groupId: string
  children: React.ReactNode
}) {
  return <GroupContext.Provider value={groupId}>{children}</GroupContext.Provider>;
}

export function AccordionItem({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return <ItemContext.Provider value={id}>{children}</ItemContext.Provider>;
}

export function AccordionTrigger({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ctx = useContext(AccordionContext);
  const groupId = useContext(GroupContext);
  const itemId = useContext(ItemContext);
  if (!ctx)     throw new Error('AccordionTrigger must be inside AccordionProvider');
  if (!groupId) throw new Error('AccordionTrigger must be inside Accordion');
  if (!itemId)  throw new Error('AccordionTrigger must be inside AccordionItem');

  const isOpen = ctx.state[groupId] === itemId;

  return (
    <div
      className={className}
      onClick={() => ctx.setOpenItem(groupId, isOpen ? null : itemId)}
    >
      {children}
    </div>
  )
}

export function AccordionContent({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ctx = useContext(AccordionContext);
  const groupId = useContext(GroupContext);
  const itemId = useContext(ItemContext);
  if (!ctx)     throw new Error('AccordionTrigger must be inside AccordionProvider');
  if (!groupId) throw new Error('AccordionTrigger must be inside Accordion');
  if (!itemId)  throw new Error('AccordionTrigger must be inside AccordionItem');

  const isOpen = ctx.state[groupId] === itemId;
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div className={`w-full overflow-x-auto overflow-hidden transition-all duration-300 ease-in-out ${className}`} style={{ maxHeight: height }}>
      <div ref={ref}>
        {children}
      </div>
    </div>
  )
}
