import React, { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;

    script.innerHTML = JSON.stringify({
      feedMode: 'market',
      market: 'stock',
      isTransparent: true,
      displayMode: 'adaptive',
      width: '400',
      height: '154',
      colorTheme: 'dark',
      locale: 'en',
    });

    const widgetContainer = document.getElementById('tradingview-widget');
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    return () => {
      if (widgetContainer) {
        widgetContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview-widget" className="tradingview-widget-container__widget"></div>
      </div>
  );
};

export default TradingViewWidget;
