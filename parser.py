import json

# Function to check if a number is prime
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True


data = []

# Read file
with open("manifest.txt", "r") as file:
    lines = file.readlines()

# Process each line
for line in lines:
    # Step 1: Clean line
    line = line.strip()

    # Step 2: Split parts
    part1, part2 = line.split("||")
    cargo_part, destination = part2.split(">>")

    # Extract date
    date = part1.strip().replace("[", "").replace("]", "")

    # Extract cargo id and weight
    cargo_id, weight = cargo_part.split("::")
    cargo_id = cargo_id.strip()
    weight = float(weight.strip())

    destination = destination.strip()

    # 🔹 Business Rule 1
    if "Sector-7" in destination:
        weight = weight * 1.45

    # 🔹 Business Rule 2
    weight = round(weight)

    if is_prime(weight):
        continue  # skip this record

    # Store valid record
    record = {
        "date": date,
        "cargo_id": cargo_id,
        "weight": weight,
        "destination": destination
    }

    data.append(record)

# Save to JSON
with open("output.json", "w") as f:
    json.dump(data, f, indent=4)

print("JSON file created successfully!")
print("Valid records:", len(data)) 