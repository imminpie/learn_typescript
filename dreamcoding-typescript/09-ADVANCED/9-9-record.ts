{
  /**
   * Record Type
   */

  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact';

  // Map<k, V> 라고 생각하자.
  const nav: Record<Page, PageInfo> = {
    home: { title: 'Home' },
    about: { title: 'About' },
    contact: { title: 'Contact' },
  };
}
