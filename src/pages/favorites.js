import React, { useState, useEffect } from 'react';
import Content from '../components/Content';
import DefaultLayout from '../layouts';
import ContentSection from '../components/ContentSection';
import { getCookie } from '../util/cookieHelper';
import Slots from '../components/Slot/Slots';
import { fetchSlots } from '../graphql/airtable';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const isActive = uniqueSlotIdentifier =>
    !!favorites.find(favorite => favorite === uniqueSlotIdentifier);

  useEffect(() => {
    const favoriteCookies = getCookie('favorites', document.cookie);
    setFavorites(favoriteCookies ? JSON.parse(favoriteCookies) : []);
  }, []);

  const slots = fetchSlots();
  const allCollections = slots.filter(({ date, start, time, title }) =>
    isActive(`${date}_${start || time}_${title}`),
  );
  return (
    <DefaultLayout>
      <Content>
        <ContentSection minHeight="100vh" withTopSeperator withBottomSeperator>
          <Slots
            slots={allCollections}
            removeFavorite={setFavorites}
            isFavourites
          />
        </ContentSection>
      </Content>
    </DefaultLayout>
  );
};

export default FavoritesPage;
