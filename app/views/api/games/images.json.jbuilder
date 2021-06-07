

# json.image image_url("games/#{@info[:game]}/0_logo.jpg")
# json.names @info[:image_names]
# json.count @info[:image_count]

json.images do
    @info[:image_names].each do |image|
        json.set! image[0] do
            json.image_url image_url("games/#{@info[:game]}/#{image}")
        end
    end
end