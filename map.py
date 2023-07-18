import matplotlib.pyplot as plt

from mpl_toolkits.basemap import Basemap
# Crear una instancia de Basemap
m = Basemap(projection='cyl', resolution='l', area_thresh=10000)
# Dibuja las costas
m.drawcoastlines()
# Dibuja los paises
m.drawcountries()
# Dibuja los estados
m.drawstates()
# Le ponemos un titulo al Mapa
plt.title('Mapa Mundi')
# Muestra una ventana donde esta la figura que acaba de generarse
plt.show()